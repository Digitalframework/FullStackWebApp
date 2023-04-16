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


    @PostMapping("/sendEmail")
    String sendEmail(@RequestBody EmailDetails details){
        String status = emailService.sendEmail(details);

        return status;
    }
    @PostMapping("/sendEmailWithAttachment")
    public String sendEmailWithAttachment(
            @RequestBody EmailDetails details)
    {
        String status
                = emailService.sendEmailWithAttachment(details);

        return status;
    }

}