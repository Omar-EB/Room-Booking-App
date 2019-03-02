package com.team.application;

import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class SubmissionController {

	@Autowired
	private UnitService unitService;
	
	@RequestMapping(method=RequestMethod.GET,value="/post-unit")
	public String unitPage(Model model){
		return "post-unit";
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/post-unit")
	public void getUnit(@ModelAttribute Unit unit){
		unitService.addUnit(unit);
	}
}