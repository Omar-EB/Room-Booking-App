package com.team.application;

import org.springframework.core.convert.converter.Converter;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
 
public final class DateTimeConverter implements Converter<String, Date> {
 
    private final DateFormat format;
 
    public DateTimeConverter(String dateFormat) {
        this.format = new SimpleDateFormat(dateFormat);
    }
 
    @Override
    public Date convert(String source) {
        if (source == null || source.isEmpty()) {
            return null;
        }
        try {
			return format.parse(source);
		} catch (ParseException e) {
			e.printStackTrace();
		}
        return null;
    }
}
