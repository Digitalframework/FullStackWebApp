package com.Backend.email;

public interface EmailServiceInterface {

    String sendSimpleMessage(EmailDetails details);
    String sendMessageWithAttachment(EmailDetails details);
}
