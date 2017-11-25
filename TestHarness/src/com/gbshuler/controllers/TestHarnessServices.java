package com.gbshuler.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
 
/**
 * Angular 1 Services In-Depth 3 - Building the Contacts app
 * https://www.youtube.com/watch?v=wYP0xCjzrNA
 * @author brad
 *
 */
@Controller
@RequestMapping("/harness")
public class TestHarnessServices {
	@RequestMapping("/sayhello")
	public String sayHello(){		
		System.out.println("Console Log harness.sayHello called");
	    return "/index.html";
	}
}
