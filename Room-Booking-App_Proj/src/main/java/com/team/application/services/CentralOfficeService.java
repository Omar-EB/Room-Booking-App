package com.team.application.services;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Persistence;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team.application.models.CentralOffice;
import com.team.application.models.Hotel;
import com.team.application.models.keys.CentralOfficeCompositeKey;
import com.team.application.repositories.CentralOfficeRepository;
import com.team.application.repositories.HotelRepository;

@Service
public class CentralOfficeService {
	
	@Autowired
	private CentralOfficeRepository centralOfficeRespository;
	
	public List<CentralOffice> getCentralOffices(){
		List<CentralOffice> results = new ArrayList();
		centralOfficeRespository.findAll().forEach(results :: add);
		System.out.println(results.get(0).getPhone_number());
		return results;
	}
	
	public CentralOffice getCentralOffice(CentralOfficeCompositeKey compositKey) {
		return centralOfficeRespository.findById(compositKey).get();
	}
	
	public CentralOffice getCentralOfficeByName(String hc_name) {
		return centralOfficeRespository.findCentralOfficeByName(hc_name);
	}
}
