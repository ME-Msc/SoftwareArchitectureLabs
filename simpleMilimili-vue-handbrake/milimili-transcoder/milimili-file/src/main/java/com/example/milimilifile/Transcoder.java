package com.example.milimilifile;

import java.io.File;
import java.util.UUID;
import java.util.concurrent.BlockingQueue;

import org.apache.commons.io.FileUtils;

public class Transcoder implements Runnable {

    private String directory;
    private BlockingQueue<String> queue;

    public Transcoder(String dir, BlockingQueue<String> que) {
        this.directory = dir;
        this.queue = que;
    }

    @Override
    public void run() {
        String rawDir = this.directory + "\\raw";
        String tmpDir = this.directory + "\\tmp";
        try {
            while (true) {
                String fileName = queue.take();
                File src = new File(rawDir + File.separator + fileName);
                File dest = new File(tmpDir + File.separator + UUID.randomUUID().toString().replaceAll("-", "")
                        + File.separator + fileName);

                try {
                    FileUtils.copyFile(src, dest);
                } catch (Exception e) {
                    FileUtils.deleteQuietly(dest.getParentFile());
                }
                if (dest.exists()) {
                    try {
                        FileUtils.deleteQuietly(dest.getParentFile());
                        System.out.printf("file %s copy over%n", src.getAbsolutePath());

                        String fileNameTerm = fileName.split("\\.")[0];
                        String handbrake = " E:\\Apps\\HandBrakeCLI\\HandBrakeCLI";
                        File thisfile = new File(System.getProperty("user.dir"));
                        String dataPath = thisfile.getParent() + "\\data";
                        String[] choices = { "360", "720", "1080" };
                        String[] settings = { " -X 480 -Y 360", " -X 1280 -Y 720", " -X 1920 -Y 1080" };
                        for (int i = 0; i < 3; ++i) {
                            String input = " -i " + dataPath + "\\raw\\" + fileNameTerm + ".mp4";
                            String output = " -o " + dataPath + "\\" + choices[i] + "\\" + fileNameTerm + "-"
                                    + choices[i] + ".mp4";
                            try {
                                System.out.println("transcode start!!!!!!!!!!!!!");
                                Runtime.getRuntime()
                                        .exec("cmd.exe /k start " + handbrake + input + output + settings[i]);
                                System.out.println("transcode end!!!!!!!!!!!!!");
                            } catch (Exception e) {
                                e.printStackTrace();
                            }
                        }
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
            }

        } catch (Exception e) {
            System.out.println("处理异常, 停止程序");
            System.exit(1);

        }
    }
}