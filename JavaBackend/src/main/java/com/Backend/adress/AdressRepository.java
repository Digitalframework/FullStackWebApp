package com.Backend.adress;
import com.Backend.user.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface AdressRepository extends CrudRepository<Adress,Long>{

    Optional<Adress> findById(String id);
}
