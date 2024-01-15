package com.Backend.pdfattachment;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// Annotations
@Data
@AllArgsConstructor
@NoArgsConstructor

public class PDFDetails {


    private String firstname;

    private String lastname;

    private String street;

    private String number;

    private String city;

    private String zip;

    private String orderid;

    private Integer sqm;
    private String productType;
    private String date;
}
