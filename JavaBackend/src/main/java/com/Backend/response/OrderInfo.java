package com.Backend.response;

import java.util.Date;

public class OrderInfo {

    private Integer sqm;
    private String productType;

    private String date;



    public Integer getSqm() {
        return sqm;
    }

    public void setSqm(Integer sqm) {
        this.sqm = sqm;
    }

    public String getProductType() {
        return productType;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
