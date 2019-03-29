package com.team.application;

import org.springframework.web.bind.annotation.RestController;

import com.team.application.models.CentralOffice;
import com.team.application.models.Hotel;
import com.team.application.services.CentralOfficeService;
import com.team.application.services.HotelService;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class RestfulController {

	@Autowired
	private UnitService unitService;
	@Autowired
	private HotelService hotelService;
	@Autowired
	private CentralOfficeService centralOfficeService;
	
	 @RequestMapping("/")
	 public String index() {
		 return "BackEnd index page";
	}
	
	@GetMapping("/units")
	public List<Unit> getUnits(@RequestParam(value = "description", required = false) String description){
		if (description==null) 		return unitService.getAllUnits();
		else return unitService.unitDescription(description);
	}
	
	@GetMapping("/units/{id}")
	public Unit getUnit(@PathVariable int id){
		return unitService.getUnit(id);
	}
	
	@GetMapping("/hotels")
	public List<Hotel> gethotels(){
		return hotelService.getAllHotels();
	}
	
	@GetMapping("/hotels/id")
	public int gethotelId(@RequestParam(value = "street_name", required = false) String street_name,@RequestParam(value = "street_number", required = false) int street_number,@RequestParam(value = "city", required = false) String city,@RequestParam(value = "state", required = false) String state,@RequestParam(value = "country", required = false) String country){
		return hotelService.getHotelId(street_name,street_number,city,state,country);
	}
	
	@GetMapping("/centraloffices")
	public List<CentralOffice> getCentralOffices(){
		return centralOfficeService.getCentralOffices();
	}
	
	@GetMapping("/centraloffices/{hc_name}")
	public CentralOffice getCentralOfficebyName(@PathVariable String hc_name){
		return centralOfficeService.getCentralOfficeByName(hc_name);
	}
	
	@DeleteMapping("/units/{id}")
	public boolean deleteUnit(@PathVariable int id){
		unitService.deleteUnit(id);
		return true;
	}
	
	@PostMapping("/units")
	public Unit saveUnit( @RequestBody Unit unit){
		return unitService.addUnit(unit);
	}
	
	@PutMapping("/units")
	public Unit updateUnit( @RequestBody Unit unit){
		return unitService.updateUnit(unit);
	}
}