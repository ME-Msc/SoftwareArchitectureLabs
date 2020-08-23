package com.example.milimiliserver;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import lombok.AllArgsConstructor;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.core.Queue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin(allowCredentials = "true")
@AllArgsConstructor
public class VideoController {

    private final NonStaticResourceHttpRequestHandler nonStaticResourceHttpRequestHandler;
    private static final boolean NON_DURABLE = false;
    private static final String MY_QUEUE_NAME = "myQueue";

    @Bean
    public Queue myQueue() {
        return new Queue(MY_QUEUE_NAME, NON_DURABLE);
    }

    @Autowired
    public RabbitTemplate rabbitTemplate;

    @RequestMapping(value = "/upload", method = RequestMethod.POST)
    @ResponseBody
    public void saveUploadFile(@RequestParam("file") MultipartFile file) throws IOException, InterruptedException {
        // String dataPath = "X:\\raw\\";
        String dataPath = "/nfs/raw/";
        String fileName = file.getOriginalFilename();
        File dest = new File(dataPath + fileName);
        file.transferTo(dest);
        rabbitTemplate.convertAndSend(MY_QUEUE_NAME, fileName);
    }

    @RequestMapping(value = "/files", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, String> getFiles(HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        System.out.println("getFiles!!!!!!!!!!!!!!!!!");
        List<String> fileNames = new ArrayList();

        // String dataPath = "X:\\raw\\";
        String dataPath = "/nfs/raw/";
        File newFile = new File(dataPath);
        File[] files = newFile.listFiles();
        for (File fileIndex : files) {
            if (!fileIndex.exists()) {
                throw new NullPointerException("Cannot find " + fileIndex);
            } else if (fileIndex.isFile()) {
                fileNames.add(fileIndex.getName());
            }
        }
        Map<String, String> map = new HashMap<String, String>();
        for (int i = 0; i < fileNames.size(); i++) {
            map.put(Integer.toString(i), fileNames.get(i));
        }
        return map;
    }

    @GetMapping("/play/360/{name}")
    public void videoPreview360(HttpServletRequest request, HttpServletResponse response,
            @PathVariable("name") String name) throws Exception {
        // String dataPath = "X:\\360\\" + name;
        String dataPath = "/nfs/360/" + name;
        Path filePath = Paths.get(dataPath);
        if (Files.exists(filePath)) {
            String mimeType = Files.probeContentType(filePath);
            if (!StringUtils.isEmpty(mimeType)) {
                response.setContentType(mimeType);
            }
            request.setAttribute(NonStaticResourceHttpRequestHandler.ATTR_FILE, filePath);
            nonStaticResourceHttpRequestHandler.handleRequest(request, response);

        } else {
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
            response.setCharacterEncoding(StandardCharsets.UTF_8.toString());
        }
    }

    @GetMapping("/play/720/{name}")
    public void videoPreview720(HttpServletRequest request, HttpServletResponse response,
            @PathVariable("name") String name) throws Exception {
        // String dataPath = "X:\\720\\" + name;
        String dataPath = "/nfs/720/" + name;
        Path filePath = Paths.get(dataPath);
        if (Files.exists(filePath)) {
            String mimeType = Files.probeContentType(filePath);
            if (!StringUtils.isEmpty(mimeType)) {
                response.setContentType(mimeType);
            }
            request.setAttribute(NonStaticResourceHttpRequestHandler.ATTR_FILE, filePath);
            nonStaticResourceHttpRequestHandler.handleRequest(request, response);

        } else {
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
            response.setCharacterEncoding(StandardCharsets.UTF_8.toString());
        }
    }

    @GetMapping("/play/1080/{name}")
    public void videoPreview1080(HttpServletRequest request, HttpServletResponse response,
            @PathVariable("name") String name) throws Exception {
        // String dataPath = "X:\\1080\\" + name;
        String dataPath = "/nfs/1080/" + name;
        Path filePath = Paths.get(dataPath);
        if (Files.exists(filePath)) {
            String mimeType = Files.probeContentType(filePath);
            if (!StringUtils.isEmpty(mimeType)) {
                response.setContentType(mimeType);
            }
            request.setAttribute(NonStaticResourceHttpRequestHandler.ATTR_FILE, filePath);
            nonStaticResourceHttpRequestHandler.handleRequest(request, response);

        } else {
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
            response.setCharacterEncoding(StandardCharsets.UTF_8.toString());
        }
    }

}