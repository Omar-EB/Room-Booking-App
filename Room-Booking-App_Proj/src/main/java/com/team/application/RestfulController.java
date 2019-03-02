package com.team.application;

import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
public class RestfulController {

	@RequestMapping("/units")
	public List<Unit> getUnits(){
		Unit[] array = new Unit[] {new Unit(1,"Unit-1",1.0), new Unit(2,"Unit-2",2.0), new Unit(3,"Unit-3",3.0)};
		return Arrays.asList(array);
	}
}
