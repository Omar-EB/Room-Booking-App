package com.team.application.repositories.checkedin;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.team.application.models.CheckedIn;
import com.team.application.models.keys.CheckedInCompositeKey;

public interface CheckedInRepository extends CrudRepository<CheckedIn, CheckedInCompositeKey>,CheckedInCustomRepository {
	
	@Query("SELECT chk FROM CheckedIn chk WHERE chk.hotel_id = :hotel_id AND chk.room_number= :room_number")
	public List<CheckedIn> findCheckInsByRoom(@Param("hotel_id") Integer hotel_Id, @Param("room_number") Integer room_number);
	
}
