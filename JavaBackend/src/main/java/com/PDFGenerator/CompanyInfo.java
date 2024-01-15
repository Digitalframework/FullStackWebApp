package com.PDFGenerator;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CompanyInfo {

    private String companyname;

    private String city;

    private String zip;


    private String adress;

    private int number;

    private String phone;

    private String fax;

    private String email;
}
