package com.Backend.order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    @Autowired
    private OrderRepository repo;
    public Iterable<Order> listAll() {
        return this.repo.findAll();
    }

    public void saveOrUpdate(Order order)
    {
        repo.save(order);
    }

    public Order getAdressById(long id)
    {
        return repo.findById(id).get();
    }
}
