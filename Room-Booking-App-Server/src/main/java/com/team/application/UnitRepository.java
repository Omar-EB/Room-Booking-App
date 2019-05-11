package com.team.application;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface UnitRepository extends CrudRepository<Unit,Integer>{
	
	@Query("SELECT p FROM Unit p WHERE LOWER(p.name) = LOWER(:description)")
    public List<Unit> find(@Param("description") String description);

}
