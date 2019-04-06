package com.team.application;

import org.springframework.web.bind.annotation.RestController;

import com.team.application.models.*;
import com.team.application.models.keys.ReservationCompositeKey;
import com.team.application.repositories.display.DisplayRepository;
import com.team.application.services.*;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.TimeZone;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;
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
	private DisplayRepository displayRepository;
	
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
	@Autowired
	private CustomerService customerService;
	@Autowired 
	private ReservationService reservationService;
	@Autowired
	private CheckedInService checkedInService;
	@Autowired 
	private ReservationsArchiveService reservationsArchiveService;
	
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
	
	//example: localhost:8080/hotels/id?employee_sin=153269837   : returns the hotel_id of the hotel where the employee works
	@GetMapping("/hotels/id")
	public int gethotelId(@RequestParam(value = "street_name", required = false) String street_name,@RequestParam(value = "street_number", required = false) Integer street_number,@RequestParam(value = "city", required = false) String city,@RequestParam(value = "state", required = false) String state,@RequestParam(value = "country", required = false) String country,@RequestParam(value = "employee_sin", required = false) String employee_sin ){
		if (employee_sin==null)return hotelService.getHotelId(street_name,street_number,city,state,country);
		return employeeService.getHotelId(employee_sin);
	}
	
	@GetMapping("/centraloffices")
	public List<CentralOffice> getCentralOffices(){
		return centralOfficeService.getCentralOffices();
	}
	
	@GetMapping("/centraloffices/{hc_name}")
	public CentralOffice getCentralOfficebyName(@PathVariable String hc_name){
		return centralOfficeService.getCentralOfficeByName(hc_name);
	}
	
	@GetMapping("/rooms")
	public List<Room> getRooms(){
		return roomService.getAllRooms();
	}
	
	@GetMapping("/rooms/{hotel_id}")
	public List<Room> findRoomsByHotelId(@PathVariable Integer hotel_id){
		return roomService.findRoomsByHotelId(hotel_id);
	}
	
	//example: localhost:8080/rooms/query?city=Montreal&state=QC&country=CA&start=2019-04-01T10:00:00&end=2019-04-02T10:00:00 --- OPTIONAL: &rating=?&capacity=?&price=?&area=?
	@GetMapping("/rooms/query")
	public List<Room> roomQuery(
			@RequestParam(value="city",required=true) String city,
			@RequestParam(value="state",required=true) String state,
			@RequestParam(value="country",required=true) String country,
			@RequestParam(value="rating",required=false) Integer rating,
			@RequestParam(value="capacity",required=false) Integer capacity,
			@RequestParam(value="price",required=false) Double price,
			@RequestParam(value="area",required=false) Double area,
			@RequestParam(value="start",required=true) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Date start_date,
			@RequestParam(value="end",required=true) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Date end_date)
	{
		
		return roomService.findRoomsByQuery(city,state,country,rating,capacity,price,area,start_date,end_date);
	}
	
	//example: localhost:8080/rooms/1/query?start=2019-04-01T10:00:00&end=2019-04-02T10:00:00 --- OPTIONAL: capacity=?&price=?&area=?
	@GetMapping("/rooms/{hotel_id}/query")
	public List<Room> roomsInHotelQuery(
			@PathVariable Integer hotel_id,
			@RequestParam(value="capacity",required=false) Integer capacity,
			@RequestParam(value="price",required=false) Double price,
			@RequestParam(value="area",required=false) Double area,
			@RequestParam(value="start",required=true) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Date start_date,
			@RequestParam(value="end",required=true) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Date end_date)
	{
		
		return roomService.findRoomsInHotelByQuery(hotel_id,capacity,price,area,start_date,end_date);
	}
	
	@GetMapping("/rooms/{hotel_id}/{room_number}/amenities")
	public List<RoomAmenities> findAmenetiesByHotelRoom(@PathVariable Integer hotel_id,@PathVariable Integer room_number){
		return roomAmenitiesService.findAmenitiesByHotelRoom(hotel_id,room_number);
	}
	
	@GetMapping("/rooms/{hotel_id}/{room_number}/damages")
	public List<RoomDamages> findDamagesByHotelRoom(@PathVariable Integer hotel_id,@PathVariable Integer room_number){
		return roomDamagesService.findDamagesByHotelRoom(hotel_id,room_number);
	}
	
	
	@GetMapping("/rooms/{hotel_id}/reservations")
	public List<Reservation> findReservationsByHotelId(@PathVariable Integer hotel_id){
		return reservationService.findReservationsByHotelId(hotel_id);
	}
	
	@GetMapping("/rooms/{hotel_id}/{customer_sin}/customer/reservations")
	public List<Reservation> findReservationsByHotelAndCustomer(@PathVariable Integer hotel_id,@PathVariable String customer_sin){
		return reservationService.findReservationsByHotelAndCustomer(hotel_id,customer_sin);
	}
	
	@GetMapping("/rooms/{hotel_id}/{room_number}/room/reservations")
	public List<Reservation> findReservationsByRoomlId(@PathVariable Integer hotel_id,@PathVariable Integer room_number){
		return reservationService.findReservationsByRoomId(hotel_id,room_number);
	}
	
	@GetMapping("/rooms/reservations")
	public List<Reservation> findReservations(){
		return reservationService.getAllReservations();
	}
	
	@GetMapping("/rooms/{hotel_id}/{room_number}/checkins")
	public List<CheckedIn> findCheckInsByRoomlId(@PathVariable Integer hotel_id,@PathVariable Integer room_number){
		return checkedInService.findCheckInsByRoom(hotel_id, room_number);
	}
	
	/*
	@GetMapping("/rooms/checkins")
	public List<CheckedIn> findCheckIns(){
		return checkedInService.getAllCheckIns();
	} */
	
	@GetMapping("/employees")
	public List<Employee> findEmployees(@RequestParam(value = "hotel_id", required=false) Integer hotel_id ){
		if (hotel_id == null) return employeeService.getAllEmployees();
		else return employeeService.findEmployeesbyHotelId(hotel_id);
	}
	
	@GetMapping("/hotel/{hotel_id}/roles")
	public List<EmployeeRole> findEmployeeRolesById(@PathVariable Integer hotel_id){
		return employeeRoleService.getEmployeeRolesbyHotelId(hotel_id);
	}
	
	@GetMapping("/employees/{sin}/roles")
	public List<EmployeeRole> findEmployeeRolesBySIN(@PathVariable String sin){
		return employeeRoleService.getEmployeeRolesbySIN(sin);
	}
	
	@GetMapping("/customers")
	public List<Customer> getAllCustomers(@RequestParam(required=false,value="sin") String sin){
		if (sin==null) return customerService.getAllCustomers();
		else return customerService.findCustomerbyId(sin);
	}
	
	@GetMapping("/rooms/{hotel_id}/{room_number}/{amenity}")
	public List<RoomAmenities> findAmenetiesByKey(@PathVariable Integer hotel_id,@PathVariable Integer room_number,@PathVariable String amenity){
		return roomAmenitiesService.findAmenityById(hotel_id,room_number,amenity);
	}
	
	@GetMapping("rooms/archives")
	public List<ReservationsArchive> getAllArchives(){
		return reservationsArchiveService.getAllArchives();
	}
	
	@GetMapping("rooms/{hotel_id}/archives")
	public List<ReservationsArchive> getArchivesByHotel(@PathVariable Integer hotel_id){
		return reservationsArchiveService.getArchivesByHotel(hotel_id);
	}
	
	@GetMapping("rooms/{hotel_id}/{room_number}/archives")
	public List<ReservationsArchive> getArchivesByRoom(@PathVariable Integer hotel_id,@PathVariable Integer room_number){
		return reservationsArchiveService.getArchivesByRoom(hotel_id,room_number);
	}
	
	@GetMapping("/cities")
	public List<Object[]> getAllCities(){
		return displayRepository.getCities();
	}
	
	@GetMapping("/hotelchains")
	public List<Object> getHotelChainNames(){
		return displayRepository.getHotelChainNames();
	}

	
	//example: localhost:8080/rooms/reservation?start=2021-01-20T10:00:00&end=2021-01-26T18:30:00
	//include the rest of the data in the request body as json
	@PostMapping("/rooms/reservation")
	public Boolean reserveRoom(
			@RequestParam(value = "start", required=true) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Date start_date,
			@RequestParam(value = "end", required=true) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Date end_date,
			@RequestBody Map<String,Object> json)  throws ParseException
	{
		Integer hotel_id = (Integer) json.get("hotel_id");
		Integer room_number = (Integer) json.get("room_number");
		String customer_sin = (String) json.get("customer_sin");
		String given_name = (String) json.get("given_name");
		String family_name = (String) json.get("family_name");
		String street_name = (String) json.get("street_name");
	    Integer street_number = (Integer) json.get("street_number");
	    String city = (String) json.get("city");
	    String state = (String) json.get("state");
	    String country = (String) json.get("country");

	    reservationService.reserveRoom(hotel_id, room_number, customer_sin, given_name, family_name, street_name, street_number, city, state, country, start_date, end_date, customerService, roomService);
		return new Boolean(true);
	}
	
	//example: localhost:8080/rooms/checkin?start=2019-04-02T16:00:00&end=2019-04-10T16:00:00
	//include the rest of the data in the request body as json
	//case where the checkin is linked to a pre-booked reservation
	@PostMapping("/rooms/checkin")
	public Boolean checkIn(
								@RequestParam(value = "start", required=true) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Date start_date,
								@RequestParam(value = "end", required=true) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Date end_date,
								@RequestBody Map<String,Object> json) throws ParseException
	{
		Integer hotel_id = (Integer) json.get("hotel_id");
		Integer room_number = (Integer) json.get("room_number");
		String employee_sin = (String) json.get("employee_sin");
		Double payment = (Double) json.get("payment");
		checkedInService.reservationCheckIn(hotel_id, room_number, start_date, end_date, employee_sin, payment,reservationService,employeeService);
		return  new Boolean(true);	
	}
	
	//example: localhost:8080/rooms/checkin?start=2019-04-02T16:00:00&end=2019-04-10T16:00:00
	//include the rest of the data in the request body as json
	//case where the checkin is made through a walk-in
	@PostMapping("/rooms/reservation/checkin")
	public Boolean reserveAndCheckIn(
								@RequestParam(value = "start", required=true) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Date start_date,
								@RequestParam(value = "end", required=true) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Date end_date,
								@RequestBody Map<String,Object> json) throws ParseException
	{
		Integer hotel_id = (Integer) json.get("hotel_id");
		Integer room_number = (Integer) json.get("room_number");
		String employee_sin = (String) json.get("employee_sin");
		Double payment = (Double) json.get("payment");
		String customer_sin = (String) json.get("customer_sin");
		String given_name = (String) json.get("given_name");
		String family_name = (String) json.get("family_name");
		String street_name = (String) json.get("street_name");
	    Integer street_number = (Integer) json.get("street_number");
	    String city = (String) json.get("city");
	    String state = (String) json.get("state");
	    String country = (String) json.get("country");
	    reservationService.reserveRoom(hotel_id, room_number, customer_sin, given_name, family_name, street_name, street_number, city, state, country, start_date, end_date, customerService, roomService);
	    checkedInService.reservationCheckIn(hotel_id, room_number, start_date, end_date, employee_sin, payment,reservationService,employeeService);
		return new Boolean(true);	
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