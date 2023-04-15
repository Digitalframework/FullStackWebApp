package com.Backend.email;

public interface EmailServiceInterface {

    void sendSimpleMessage(String to,
                           String subject,
                           String text);
    void sendMessageWithAttachment(String to,
                                   String subject,
                                   String text,
                                   String pathToAttachment);
}
