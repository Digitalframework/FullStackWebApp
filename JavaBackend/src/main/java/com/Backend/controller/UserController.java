package com.Backend.controller;

import com.Backend.config.JwtService;
import com.Backend.response.UserInfo;
import com.Backend.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin
public class UserController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    JwtService jwtService;

    @Autowired
    private UserDetailsService userDetailsService;

    @GetMapping("/userinfo")
    public ResponseEntity<?> getUserInfo(Principal user){
        User userObj=(User) userDetailsService.loadUserByUsername(user.getName());

        UserInfo userInfo=new UserInfo();
        userInfo.setFirstName(userObj.getFirstName());
        userInfo.setLastName(userObj.getLastName());
        userInfo.setEmail(userObj.getUsername());
        //userInfo.setRoles(userObj.getAuthorities().toArray());
        return ResponseEntity.ok(userInfo);

    }

}