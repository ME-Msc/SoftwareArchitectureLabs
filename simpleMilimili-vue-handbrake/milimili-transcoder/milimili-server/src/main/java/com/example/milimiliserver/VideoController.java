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
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.ClassUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

@Controller
@AllArgsConstructor
public class VideoController {

    private final NonStaticResourceHttpRequestHandler nonStaticResourceHttpRequestHandler;

    @RequestMapping(value = "/upload", method = RequestMethod.POST)
    @ResponseBody
    public void saveUploadFile(@RequestParam("file") MultipartFile file) throws IOException {

        File thisfile = new File(System.getProperty("user.dir"));
        String parentPath = thisfile.getParent();
        String dataPath = parentPath + "\\data\\raw\\";

        String fileName = file.getOriginalFilename();
        File dest = new File(dataPath + fileName);
        file.transferTo(dest);
    }

    @RequestMapping(value = "/files", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, String> getFiles() {
        System.out.println("getFiles!!!!!!!!!!!!!!!!!");
        List<String> fileNames = new ArrayList();

        File thisfile = new File(System.getProperty("user.dir"));
        String parentPath = thisfile.getParent();
        String dataPath = parentPath + "\\data\\raw\\";

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
        File thisfile = new File(System.getProperty("user.dir"));
        String parentPath = thisfile.getParent();
        String realPath = parentPath + "\\data\\360\\" + name;
        Path filePath = Paths.get(realPath);
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
        File thisfile = new File(System.getProperty("user.dir"));
        String parentPath = thisfile.getParent();
        String realPath = parentPath + "\\data\\720\\" + name;
        Path filePath = Paths.get(realPath);
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
        File thisfile = new File(System.getProperty("user.dir"));
        String parentPath = thisfile.getParent();
        String realPath = parentPath + "\\data\\1080\\" + name;
        Path filePath = Paths.get(realPath);
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