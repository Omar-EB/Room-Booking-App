package com.team.application.repositories.checkedin;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;
import com.team.application.models.CheckedIn;


@Repository
public class CheckedInCustomRepositoryImpl implements CheckedInCustomRepository{
	
	 @PersistenceContext
	 private EntityManager entityManager;
	 
	 @SuppressWarnings("unchecked")
	 public List<CheckedIn> findAllCheckIns(){
		 String query = "Select * from checkedin;";
		 Query q = entityManager.createNativeQuery(query,CheckedIn.class);
		 return (List<CheckedIn>) q.getResultList();
	 }

}
