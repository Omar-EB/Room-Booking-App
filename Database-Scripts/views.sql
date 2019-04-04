CREATE OR REPLACE VIEW public.roomsperarea AS
 SELECT hotel.city,
    hotel.state,
    hotel.country,
    sum(hotel.number_of_rooms) AS sum
   FROM hotel
  GROUP BY hotel.city, hotel.state, hotel.country;

CREATE OR REPLACE VIEW public.roomcapacities AS
 SELECT h.hc_name,
    h.street_name,
    h.street_number,
    h.city,
    h.state,
    h.country,
    r.capacity
   FROM hotel h
     JOIN room r ON r.hotel_id = h.hotel_id;