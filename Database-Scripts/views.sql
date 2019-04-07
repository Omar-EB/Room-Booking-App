CREATE OR REPLACE VIEW public.roomsavailable AS
 SELECT h.city,
    h.state,
    h.country,
    count(*) AS number_rooms_available
   FROM hotel h
     JOIN room r ON h.hotel_id = r.hotel_id
  WHERE NOT ((r.hotel_id, r.room_number) IN ( SELECT res.hotel_id,
            res.room_number
           FROM reservation res))
  GROUP BY h.city, h.state, h.country;

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