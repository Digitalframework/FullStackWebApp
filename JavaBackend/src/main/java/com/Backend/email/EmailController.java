package com.Backend.email;

//import javax.mail.MessagingException;
//import javax.servlet.http.HttpServletRequest;
//import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/auth")
public class EmailController {

    @Autowired
    private  EmailService emailService;


    @PostMapping("/mail")
    String sendEmail(@RequestBody EmailDetails details){
        String status = emailService.sendSimpleMessage(details);

        return status;
    }
    @PostMapping("/sendMailWithAttachment")
    public String sendMailWithAttachment(
            @RequestBody EmailDetails details)
    {
        String status
                = emailService.sendMessageWithAttachment(details);

        return status;
    }

}