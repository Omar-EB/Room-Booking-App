package com.team.application;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UnitService {
	
	@Autowired
	UnitRepository unitRepository;
/*
	private List<Unit> units = new ArrayList<Unit>();
	 {
		units.add(new Unit(1,"Unit-1",1.0));
		units.add(new Unit(2,"Unit-2",2.0));
		units.add(new Unit(3,"Unit-3",3.0));
	}
*/
	public List<Unit> getAllUnits(){
		
		List<Unit> units = new ArrayList();
		unitRepository.findAll().forEach(units :: add);
		return units;
	}
	
	public Unit getUnit(int id) {
		/*
			for (Unit unit : units) {
				if (unit.getId() == id) return unit;
			}
			return null;
		*/
		return unitRepository.findById(id).get();
	}
	
	public void addUnit(Unit unit) {
		//units.add(unit);
		unitRepository.save(unit);
	}
	
	public void updateUnit(Unit unit) {
		//units.add(unit);
		unitRepository.save(unit);
	}
	
	public void deleteUnit(int id) {
		unitRepository.deleteById(id);
	}
}
