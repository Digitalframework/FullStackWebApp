package com.Backend.email;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.io.File;

@Service
public class EmailService implements EmailServiceInterface {

    @Value("${spring.mail.username}") private String sender;


    @Autowired
    private JavaMailSender emailSender;

    public String sendEmail(EmailDetails details) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(sender);
            message.setTo(details.getRecipient());
            message.setText(details.getMsgBody());
            message.setSubject(details.getSubject());

            emailSender.send(message);
            return "Mail Sent Successfully...";
        } catch (MailException exception) {
            exception.printStackTrace();
            return "Error while Sending Mail";
        }
    }
    @Override
    public String sendEmailWithAttachment(EmailDetails details) {
        {
            // Creating a mime message
            MimeMessage mimeMessage
                    = emailSender.createMimeMessage();
            MimeMessageHelper mimeMessageHelper;

            try {

                // Setting multipart as true for attachments to
                // be send
                mimeMessageHelper
                        = new MimeMessageHelper(mimeMessage, true);
                mimeMessageHelper.setFrom(sender);
                mimeMessageHelper.setTo(details.getRecipient());
                mimeMessageHelper.setText(details.getMsgBody());
                mimeMessageHelper.setSubject(
                        details.getSubject());

                // Adding the attachment
                FileSystemResource file
                        = new FileSystemResource(
                        new File(details.getAttachment()));

                mimeMessageHelper.addAttachment(
                        file.getFilename(), file);

                // Sending the mail
                emailSender.send(mimeMessage);
                return "Mail Sent Successfully...";
            }

            // Catch block to handle MessagingException
            catch (MessagingException exception) {
                exception.printStackTrace();
                return "Error while Sending Mail";
            }
        }
    }



}
