package com.Backend.order;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface OrderRepository extends CrudRepository<Order,Long>{

    Optional<Order> findById(String id);
}
