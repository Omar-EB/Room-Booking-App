package com.team.application;

import org.springframework.web.bind.annotation.RestController;

import com.team.application.models.CentralOffice;
import com.team.application.models.Employee;
import com.team.application.models.EmployeeRole;
import com.team.application.models.Hotel;
import com.team.application.models.Room;
import com.team.application.models.RoomAmenities;
import com.team.application.models.RoomDamages;
import com.team.application.services.CentralOfficeService;
import com.team.application.services.EmployeeRoleService;
import com.team.application.services.EmployeeService;
import com.team.application.services.HotelService;
import com.team.application.services.RoomService;
import com.team.application.services.RoomAmenitiesService;
import com.team.application.services.RoomDamagesService;

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
	@Autowired
	private RoomService roomService;
	@Autowired
	private RoomAmenitiesService roomAmenitiesService;
	@Autowired
	private RoomDamagesService roomDamagesService;
	@Autowired
	private EmployeeService employeeService;
	@Autowired
	private EmployeeRoleService employeeRoleService;
	
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
	
	//for the real query, query hotels first, get their hotel_id 's then query rooms
	@GetMapping("/rooms")
	public List<Room> getRooms(){
		return roomService.getAllRooms();
	}
	
	@GetMapping("/rooms/{hotel_id}")
	public List<Room> findRoomsByHotelId(@PathVariable int hotel_id){
		return roomService.findRoomsByHotelId(hotel_id);
	}
	
	@GetMapping("/rooms/query/{state}")
	public List<Room> getRoomsQuery(@PathVariable String state){
		return roomService.findRoomsByQuery(0,state);
	}
	
	@GetMapping("/rooms/{hotel_id}/{room_number}/amenities")
	public List<RoomAmenities> findAmenetiesByHotelRoom(@PathVariable int hotel_id,@PathVariable int room_number){
		return roomAmenitiesService.findAmenitiesByHotelRoom(hotel_id,room_number);
	}
	
	@GetMapping("/rooms/{hotel_id}/{room_number}/damages")
	public List<RoomDamages> findDamagesByHotelRoom(@PathVariable int hotel_id,@PathVariable int room_number){
		return roomDamagesService.findDamagesByHotelRoom(hotel_id,room_number);
	}
	
	@GetMapping("/employees")
	public List<Employee> findEmployees(@RequestParam(value = "hotel_id", required=false) Integer hotel_id ){
		if (hotel_id == null) return employeeService.getAllEmployees();
		else return employeeService.findEmployeesbyHotelId(hotel_id);
	}
	
	@GetMapping("hotel/{id}/roles")
	public List<EmployeeRole> findEmployeeRolesById(@PathVariable int id){
		return employeeRoleService.getEmployeeRolesbyHotelId(id);
	}
	
	@GetMapping("employees/{sin}/roles")
	public List<EmployeeRole> findEmployeeRolesBySIN(@PathVariable String sin){
		return employeeRoleService.getEmployeeRolesbySIN(sin);
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