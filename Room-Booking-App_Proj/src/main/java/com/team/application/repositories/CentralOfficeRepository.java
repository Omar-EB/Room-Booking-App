package com.team.application.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.team.application.models.CentralOffice;
import com.team.application.models.keys.CentralOfficeCompositeKey;

public interface CentralOfficeRepository extends CrudRepository<CentralOffice, CentralOfficeCompositeKey> {
	
	@Query("SELECT co FROM CentralOffice co WHERE co.hotelChain.hc_name = :hc_name")
    public CentralOffice findCentralOfficeByName(@Param("hc_name") String hc_name);

}
