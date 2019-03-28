package com.team.application;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Persistence;

import org.springframework.beans.factory.annotation.Autowired;
import javax.persistence.Query;
import org.springframework.stereotype.Service;

@Service
public class UnitService {
	
	@Autowired
	UnitRepository unitRepository;
	public List<Unit> getAllUnits(){
		List<Unit> units = new ArrayList();
		unitRepository.findAll().forEach(units :: add);
		return units;
	}
	
	public Unit getUnit(int id) {
		return unitRepository.findById(id).get();
	}
	
	public Unit addUnit(Unit unit) {
		return unitRepository.save(unit);
	}
	
	public Unit updateUnit(Unit unit) {
		return unitRepository.save(unit);
	}
	
	public void deleteUnit(int id) {
		unitRepository.deleteById(id);
	}
	
	public List<Unit> unitDescription(String description){
		List<Unit> units = new ArrayList();
		unitRepository.find(description).forEach(units :: add);
		return units;
		
		/*
		EntityManager em = Persistence.createEntityManagerFactory("com.team.application").createEntityManager();
		Query q = em.createNativeQuery("SELECT a.firstname, a.lastname FROM Author a");
		List<Object[]> authors = q.getResultList();
		 
		for (Object[] a : authors) {
		    System.out.println("Author "
		            + a[0]
		            + " "
		            + a[1]);
		} */
	}
	
	/* public List<Object> findHotelidByName(String hc_name){
		EntityManager em = Persistence.createEntityManagerFactory("com.team.application").createEntityManager();
		em.getTransaction().begin();

			

		List<Object[]> results = em.createQuery("SELECT p.firstName, p.lastName, n.phoneNumber FROM Hotel h, PhoneBookEntry n WHERE p.firstName = n.firstName AND p.lastName = n.lastName").getResultList();



		for (Object[] result : results) {

			log.info(result[0] + " " + result[1] + " - " + result[2]);

		}



		em.getTransaction().commit();

		em.close();
	} */
	
	
}
