package com.Backend.controller;

import com.Backend.email.EmailDetails;
import com.Backend.email.EmailService;
import com.Backend.pdfattachment.PDFCreationService;
import com.Backend.pdfattachment.PDFDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
public class PDFCreationController {

    @Autowired
    private PDFCreationService createPDF;


    @PostMapping("/createPDF")
    String sendEmail(@RequestBody PDFDetails details){
        String status = createPDF.generatePDF(details);
        return status;
    }

}
