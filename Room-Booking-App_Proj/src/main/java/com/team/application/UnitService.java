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
	
	
}
