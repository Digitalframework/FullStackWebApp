package com.Backend.controller;

import com.Backend.adress.Adress;
import com.Backend.adress.AdressService;
import com.Backend.order.Order;
import com.Backend.order.OrderService;
import com.Backend.response.AdressInfo;
import com.Backend.response.OrderInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin
public class OrderController {

    @Autowired
    private OrderService services;

    @GetMapping("/orderList")
    public Iterable<Order>getOrder()
    {
        return services.listAll();
    }


    @PostMapping(value = "/order")
    private long saveBook(@RequestBody Order order)
    {
        services.saveOrUpdate(order);
        return  order.getId();
    }

    @RequestMapping("/order/{id}")
    private OrderInfo getBooks(@PathVariable(name = "id") int orderid)
    {
        Order orderObj=services.getAdressById(orderid);

        OrderInfo orderInfo=new OrderInfo();
        orderInfo.setSqm(orderObj.getSqm());
        orderInfo.setProductType(orderObj.getProductType());;
        orderInfo.setDate(orderObj.getDate());
        return orderInfo;
    }


}
