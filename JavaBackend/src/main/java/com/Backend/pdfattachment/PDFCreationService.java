package com.Backend.pdfattachment;

import com.Backend.email.EmailDetails;
import com.PDFGenerator.GeneratePDF;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class PDFCreationService {

    public String generatePDF(PDFDetails details) {
        try {
            GeneratePDF creator = new GeneratePDF();
            creator.createPDF(details);
            return "PDF created";
        } catch (IOException exception) {
            exception.printStackTrace();
            return "Error while creating PDF";
        }
    }
}
