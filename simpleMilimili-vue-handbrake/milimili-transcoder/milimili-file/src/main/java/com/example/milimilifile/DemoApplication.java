package com.example.milimilifile;

import java.util.concurrent.BlockingQueue;

import java.util.concurrent.LinkedBlockingQueue;
import java.io.File;
import java.io.IOException;

public class DemoApplication {

	public static void main(String[] args) throws IOException, InterruptedException {

		File thisfile = new File(System.getProperty("user.dir"));
		String parentPath = thisfile.getParent();
		String dataPath = parentPath + "\\data";

		BlockingQueue<String> queue = new LinkedBlockingQueue<String>();

		FileListener fileListener = new FileListener(dataPath, queue);
		Thread fileListenerThread = new Thread(fileListener);
		fileListenerThread.start();

		Transcoder transcoder = new Transcoder(dataPath, queue);
		Thread processorThread = new Thread(transcoder);
		processorThread.start();
		while (true) {
			try {
				Thread.sleep(9999999);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}

}
