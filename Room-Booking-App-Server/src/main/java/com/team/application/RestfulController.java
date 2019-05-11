package com.team.application;

import org.springframework.web.bind.annotation.RestController;

import com.team.application.models.*;
import com.team.application.models.keys.ReservationCompositeKey;
import com.team.application.models.keys.RoomCompositeKey;
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
	private HotelChainService hotelChainService;
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
	
	//example: localhost:8080/rooms/query?hc_name=TopHill&city=Montreal&state=QC&country=CA&start=2019-04-01T10:00:00&end=2019-04-02T10:00:00 --- OPTIONAL: &rating=?&capacity=?&price=?&area=?
	@GetMapping("/rooms/query")
	public List<Room> roomQuery(
			@RequestParam(value="hc_name",required=false) String hc_name,
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
		
		return roomService.findRoomsByQuery(hc_name,city,state,country,rating,capacity,price,area,start_date,end_date);
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
	
	@GetMapping("/checkins")
	public List<CheckedIn> findCheckIns(){
		return checkedInService.getAllCheckIns();
	}
	
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
		Double payment;
		try {
			payment = (Double) json.get("payment");
		} catch (ClassCastException exception) {
			payment = new Double(((Integer) json.get("payment")).doubleValue());
		}
		checkedInService.reservationCheckIn(hotel_id, room_number, start_date, end_date, employee_sin, payment,reservationService,employeeService);
		return new Boolean(true);	
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
		Double payment;
		try {
			payment = (Double) json.get("payment");
		} catch (ClassCastException exception) {
			payment = new Double(((Integer) json.get("payment")).doubleValue());
		}
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
	
	//Customer insert
	@PostMapping("/backend/add/customer")
	public Boolean addCustomer(@RequestBody Map<String,Object> json) {
		String customer_sin = (String) json.get("customer_sin");
		String given_name = (String) json.get("given_name");
		String family_name = (String) json.get("family_name");
		String street_name = (String) json.get("street_name");
	    Integer street_number = (Integer) json.get("street_number");
	    String city = (String) json.get("city");
	    String state = (String) json.get("state");
	    String country = (String) json.get("country");
	    System.out.println("customer sin: "+customer_sin);
	    customerService.addCustomer(new Customer(customer_sin, given_name, family_name, street_name, street_number, city, state, country));
		return new Boolean(true);
	}
	
	//Customer update
	@PutMapping("/backend/update/customer")
	public Boolean updateCustomer(@RequestBody Map<String,Object> json) {
		String customer_sin = (String) json.get("customer_sin");
		String given_name = (String) json.get("given_name");
		String family_name = (String) json.get("family_name");
		String street_name = (String) json.get("street_name");
	    Integer street_number = (Integer) json.get("street_number");
	    String city = (String) json.get("city");
	    String state = (String) json.get("state");
	    String country = (String) json.get("country");
	    
	    System.out.println("customer sin: "+customer_sin);
	    Customer customer = customerService.findCustomerbyId(customer_sin).get(0);
	    customer.setGiven_name(given_name);
	    customer.setFamily_name(family_name);
	    customer.setCity(city);
	    customer.setState(state);
	    customer.setCountry(country);
	    customer.setStreet_name(street_name);
	    customer.setStreet_number(street_number);
	    customerService.addCustomer(customer);
		return new Boolean(true);
	}
	
	//Customer delete
	//example: http://localhost:8080/backend/delete/customer?customer_sin=238593295
	@DeleteMapping("/backend/delete/customer")
	public Boolean deleteCustomer(@RequestParam(value="customer_sin", required=true) String customer_sin) {    
	    customerService.deleteCustomer(customer_sin);
	    return new Boolean(true);
	}
	
	//Employee insert
	@PostMapping("/backend/add/employee")
	public Boolean addEmployee(@RequestBody Map<String,Object> json) {
		String employee_sin = (String) json.get("employee_sin");
		String given_name = (String) json.get("given_name");
		String family_name = (String) json.get("family_name");
		String street_name = (String) json.get("street_name");
	    Integer street_number = (Integer) json.get("street_number");
	    String city = (String) json.get("city");
	    String state = (String) json.get("state");
	    String country = (String) json.get("country");
	    Integer hotel_id = (Integer) json.get("hotel_id");
	    
	    Hotel hotel = hotelService.getHotelById(hotel_id);
	    employeeService.saveEmployee(new Employee(hotel,employee_sin, given_name, family_name, street_name, street_number, city, state, country));
		return new Boolean(true);
	}
	
	@PutMapping("/backend/update/employee")
	public Boolean updateEmployee(@RequestBody Map<String,Object> json) {
		String employee_sin = (String) json.get("employee_sin");
		String given_name = (String) json.get("given_name");
		String family_name = (String) json.get("family_name");
		String street_name = (String) json.get("street_name");
	    Integer street_number = (Integer) json.get("street_number");
	    String city = (String) json.get("city");
	    String state = (String) json.get("state");
	    String country = (String) json.get("country");
	    Integer hotel_id = (Integer) json.get("hotel_id");
	    
	    Employee employee = employeeService.findEmployeeById(employee_sin).get(0);
	    employee.setGiven_name(given_name);
	    employee.setFamily_name(family_name);
	    employee.setCity(city);
	    employee.setState(state);
	    employee.setCountry(country);
	    employee.setStreet_name(street_name);
	    employee.setStreet_number(street_number);
	    employee.setHotel(hotelService.getHotelById(hotel_id));
	    employeeService.saveEmployee(employee);
		return new Boolean(true);
	}
	
	//Employee delete
	//example: http://localhost:8080/backend/delete/employee?employee_sin=389129734
	@DeleteMapping("/backend/delete/employee")
	public Boolean deleteEmployee(@RequestParam(value="employee_sin", required=true) String employee_sin) {    
	    employeeService.deleteEmployee(employee_sin);
	    return new Boolean(true);
	}
	
	
	//Room insert
	@PostMapping("/backend/add/room")
	public Boolean addRoom(@RequestBody Map<String,Object> json) {
	    Integer hotel_id = (Integer) json.get("hotel_id");
	    Integer room_number = (Integer) json.get("room_number");
	    String view_type = (String) json.get("view_type");
	    Integer capacity = (Integer) json.get("capacity");
	    Boolean extendable = (Boolean) json.get("extendable");
	    Double price ;
		try {
			price = (Double) json.get("price");
		} catch (ClassCastException exception) {
			price = new Double(((Integer) json.get("price")).doubleValue());
		}
	    Double area ;
		try {
			area = (Double) json.get("area");
		} catch (ClassCastException exception) {
			area = new Double(((Integer) json.get("area")).doubleValue());
		}	
		
		RoomCompositeKey key = new RoomCompositeKey();
		key.setHotel_id(hotel_id);
		key.setRoom_number(room_number);
		
		Hotel hotel = hotelService.getHotelById(hotel_id);
		

		Room room = new Room();
		room.setRoom_id(key);
		room.setHotel(hotel);
		room.setArea(area);
		room.setCapacity(capacity);
		room.setExtendable(extendable);
		room.setPrice(price);
		room.setView_type(view_type);
		
	    roomService.saveRoom(room);
		return new Boolean(true);
	}
	
	//Room update
	@PutMapping("/backend/update/room")
	public Boolean updateRoom(@RequestBody Map<String,Object> json) {
	    Integer hotel_id = (Integer) json.get("hotel_id");
	    Integer room_number = (Integer) json.get("room_number");
	    String view_type = (String) json.get("view_type");
	    Integer capacity = (Integer) json.get("capacity");
	    Boolean extendable = (Boolean) json.get("extendable");
	    Double price ;
		try {
			price = (Double) json.get("price");
		} catch (ClassCastException exception) {
			price = new Double(((Integer) json.get("price")).doubleValue());
		}
	    Double area ;
		try {
			area = (Double) json.get("area");
		} catch (ClassCastException exception) {
			area = new Double(((Integer) json.get("area")).doubleValue());
		}		

		Room room = roomService.findRoomById(hotel_id, room_number).get(0);
		room.setArea(area);
		room.setCapacity(capacity);
		room.setExtendable(extendable);
		room.setPrice(price);
		room.setView_type(view_type);
		
	    roomService.saveRoom(room);
		return new Boolean(true);
	}
	
	//Room delete
	//example: http://localhost:8080/backend/delete/room?hotel_id=1&room_number=100
	@DeleteMapping("/backend/delete/room")
	public Boolean deleteRoom(@RequestParam(value="hotel_id", required=true) Integer hotel_id, @RequestParam(value="room_number", required=true) Integer room_number) {    
	    roomService.deleteRoom(hotel_id, room_number);
	    return new Boolean(true);
	}
	
	
	//Hotel insert
	@PostMapping("/backend/add/hotel")
	public Boolean addHotel(@RequestBody Map<String,Object> json) {
	    //Integer hotel_id = (Integer) json.get("hotel_id");
		String street_name = (String) json.get("street_name");
	    Integer street_number = (Integer) json.get("street_number");
	    String city = (String) json.get("city");
	    String state = (String) json.get("state");
	    String country = (String) json.get("country");
	    Integer rating = (Integer) json.get("rating");
	    String phone_number = (String) json.get("phone_number");
	    //Integer number_of_rooms = (Integer) json.get("number_of_rooms");
	    String hc_name = (String) json.get("hc_name");
		
	    HotelChain hotel_chain = hotelChainService.getHotelChain(hc_name).get(0);
		Hotel hotel = new Hotel();
		hotel.setHotelChain(hotel_chain);
		hotel.setCountry(country);
		hotel.setState(state);
		hotel.setCity(city);
		hotel.setPhone_number(phone_number);
		hotel.setStreet_name(street_name);
		hotel.setStreet_number(street_number);
		hotel.setRating(rating);
		hotel.setNumber_of_rooms(new Integer(0));
		//hotel_chain.getHotels().add(hotel);
		
	    hotelService.saveHotel(hotel);
		return new Boolean(true);
	}
	
	//Hotel update
	@PutMapping("/backend/update/hotel")
	public Boolean updateHotel(@RequestBody Map<String,Object> json) {
	    Integer hotel_id = (Integer) json.get("hotel_id");
		String street_name = (String) json.get("street_name");
	    Integer street_number = (Integer) json.get("street_number");
	    String city = (String) json.get("city");
	    String state = (String) json.get("state");
	    String country = (String) json.get("country");
	    Integer rating = (Integer) json.get("rating");
	    String phone_number = (String) json.get("phone_number");
	    Integer number_of_rooms = (Integer) json.get("number_of_rooms");
		
		Hotel hotel = hotelService.getHotelById(hotel_id);
		hotel.setCountry(country);
		hotel.setState(state);
		hotel.setCity(city);
		hotel.setPhone_number(phone_number);
		hotel.setStreet_name(street_name);
		hotel.setStreet_number(street_number);
		hotel.setRating(rating);
		hotel.setNumber_of_rooms(number_of_rooms);
		
	    hotelService.saveHotel(hotel);
		return new Boolean(true);
	}
	
	//Hotel delete
	//example: http://localhost:8080/backend/delete/hotel?hotel_id=1
	@DeleteMapping("/backend/delete/hotel")
	public Boolean deleteHotel(@RequestParam(value="hotel_id", required=true) Integer hotel_id) {    
	    hotelService.deleteHotel(hotel_id);
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