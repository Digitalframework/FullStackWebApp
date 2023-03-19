package com.Backend.adress;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdressService {
    @Autowired
    private AdressRepository repo;
    public Iterable<Adress> listAll() {
        return this.repo.findAll();
    }

    public void saveOrUpdate(Adress adress)
    {
        repo.save(adress);
    }

    public Adress getAdressById(long id)
    {
        return repo.findById(id).get();
    }
}
