package com.Backend.email;

public interface EmailServiceInterface {

    String sendEmail(EmailDetails details);
    String sendEmailWithAttachment(EmailDetails details);
}
