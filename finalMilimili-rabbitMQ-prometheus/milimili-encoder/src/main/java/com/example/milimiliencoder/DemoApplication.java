package com.example.milimiliencoder;

import org.springframework.amqp.core.Message;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.io.IOException;

import com.rabbitmq.client.Channel;

@SpringBootApplication
public class DemoApplication {

	private static final boolean NON_DURABLE = false;
	private static final String MY_QUEUE_NAME = "myQueue";
	Integer messageLimit = 2;

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	public Queue myQueue() {
		return new Queue(MY_QUEUE_NAME, NON_DURABLE);
	}

	@RabbitListener(queues = MY_QUEUE_NAME)
	public void listen(Message message, Channel channel) throws IOException, InterruptedException {
		channel.basicQos(messageLimit, true);
		HandbrakeThread hbThread = new HandbrakeThread(message, channel);
		hbThread.start();
		// exe.execute(hbThread1080);
		// exe.shutdown();
		// while (true) {
		// if (exe.isTerminated()) {
		// System.out.println("hbThreads end!!!!");
		// channel.basicAck(message.getMessageProperties().getDeliveryTag(), false);
		// System.out.println("Ack " + new String(message.getBody()));
		// break;
		// }
		// Thread.sleep(200);
		// }
	}
}
