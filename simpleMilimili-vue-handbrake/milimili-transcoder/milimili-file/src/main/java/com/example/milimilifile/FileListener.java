package com.example.milimilifile;

import java.io.IOException;
import java.nio.file.*;
import java.util.concurrent.BlockingQueue;

import static java.nio.file.StandardWatchEventKinds.*;

public class FileListener implements Runnable {
    private WatchService watcher;
    private String directory;
    private BlockingQueue<String> queue;

    public FileListener(String dir, BlockingQueue<String> que) throws IOException {
        this.directory = dir + "\\raw";
        this.queue = que;
        Path path = Paths.get(this.directory);
        watcher = FileSystems.getDefault().newWatchService();
        path.register(watcher, ENTRY_CREATE, ENTRY_MODIFY);
    }

    @Override
    public void run() {
        try {
            while (true) {
                WatchKey key = watcher.take();
                for (WatchEvent<?> event : key.pollEvents()) {
                    WatchEvent.Kind<?> kind = event.kind();
                    if (kind == OVERFLOW) {
                        System.out.println("Event lost or discarded");
                        continue;
                    }

                    String kindName = kind.name();
                    Path fileName = (Path) event.context();
                    System.out.printf("Event %s has happened,which fileName is %s%n", kind.name(), fileName);
                    if ("ENTRY_CREATE".equals(kindName)) {
                        System.out.println("###########");
                        queue.add(fileName.toString());
                    }
                }
                if (!key.reset()) {
                    break;
                }
            }
        } catch (Exception e) {
            System.out.println("File Listener error");
            System.exit(1);
        }
    }

}
