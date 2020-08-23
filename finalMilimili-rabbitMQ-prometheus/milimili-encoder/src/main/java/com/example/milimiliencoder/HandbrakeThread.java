package com.example.milimiliencoder;

import java.io.InputStream;
import java.io.InputStreamReader;

import com.rabbitmq.client.Channel;
import org.springframework.amqp.core.Message;

public class HandbrakeThread extends Thread {

    Message message;
    Channel channel;
    String handbrake = "E:\\Apps\\HandBrakeCLI\\HandBrakeCLI";

    HandbrakeThread(Message msg, Channel cnl) {
        this.message = msg;
        this.channel = cnl;
    }

    public void run() {
        try {
            String[] resolutions = { "360", "720", "1080" };
            String[] settings = { " -X 480 -Y 360", " -X 1280 -Y 720", " -X 1920 -Y 1080" };
            for (int i = 0; i < 3; ++i) {
                String input = " -i " + "X:\\raw\\" + new String(message.getBody());
                String output = " -o " + "X:\\" + resolutions[i] + "\\" + new String(message.getBody());
                String command = handbrake + input + output + settings[i];
                // System.out.println(command);
                String[] commandSplit = command.split(" ");
                System.out.println(resolutions[i] + " transcode start!!!!!!!!!!!!!" + new String(message.getBody()));
                ProcessBuilder processBuilder = new ProcessBuilder();
                processBuilder.command(commandSplit);
                processBuilder.redirectErrorStream(true);
                Process process = processBuilder.start();
                InputStream inputStream = process.getInputStream();
                InputStreamReader reader = new InputStreamReader(inputStream, "gbk");
                char[] chars = new char[1024];
                int len = -1;
                while ((len = reader.read(chars)) != -1) {
                    String string = new String(chars, 0, len);
                    // System.out.println(string);
                    if (string.compareTo("HandBrake has exited.") == 0) {
                        process.destroy();
                        break;
                    }
                }
                process.waitFor();
                inputStream.close();
                reader.close();
                System.out.println(resolutions[i] + " transcode end!!!!!!!!!!!!!" + new String(message.getBody()));
            }

            // process.waitFor();
            channel.basicAck(message.getMessageProperties().getDeliveryTag(), false);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
