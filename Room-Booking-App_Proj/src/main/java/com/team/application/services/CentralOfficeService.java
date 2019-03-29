package com.team.application.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team.application.models.CentralOffice;
import com.team.application.models.CentralOfficeCompositeKey;
import com.team.application.models.Hotel;
import com.team.application.repositories.CentralOfficeRepository;
import com.team.application.repositories.HotelRepository;

@Service
public class CentralOfficeService {
	
	@Autowired
	private CentralOfficeRepository centralOfficeRespository;
	
	public List<CentralOffice> getAllCentralOffices(){
		List<CentralOffice> results = new ArrayList();
		centralOfficeRespository.findAll().forEach(results :: add);
		return results;
	}
	
	
	public CentralOffice getCentralOffice(CentralOfficeCompositeKey compositKey) {
		return centralOfficeRespository.findById(compositKey).get();
	}
}
