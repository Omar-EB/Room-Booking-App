package com.team.application.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import com.team.application.models.HotelChain;

public interface HotelChainRepository extends CrudRepository<HotelChain,String>{

}
