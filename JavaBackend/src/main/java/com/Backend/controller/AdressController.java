package com.Backend.controller;

import com.Backend.adress.Adress;
import com.Backend.adress.AdressService;
import com.Backend.response.AdressInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin
public class AdressController {

    @Autowired
    private AdressService services;

    @PostMapping(value = "/adress")
    private long saveBook(@RequestBody Adress adress)
    {
        services.saveOrUpdate(adress);
        return  adress.getId();
    }

    @RequestMapping("/adress/{id}")
    private AdressInfo getBooks(@PathVariable(name = "id") int adressid)
    {
        Adress adressObj=services.getAdressById(adressid);

        AdressInfo adressInfo=new AdressInfo();
        adressInfo.setStreet(adressObj.getStreet());
        adressInfo.setNumber(adressObj.getNumber());
        adressInfo.setCity(adressObj.getCity());
        adressInfo.setZip(adressObj.getZip());
        System.out.println(adressInfo);
        return adressInfo;
    }


}
