package com.acme.axis2.noannotation.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.acme.axis2.domain.Applicant;
import com.acme.axis2.domain.Human;
import com.acme.axis2.domain.Position;

public class ApplicantTrackingService {
	public List<Applicant> retrieveApplicants(int positionNumber) { // service operation
		List<Applicant> applicants = new ArrayList<Applicant>();

		Human larry = new Human();
		larry.setFirstName("Larry");
		larry.setLastName("Leisure");

		Position trainer = new Position(positionNumber); 
		trainer.setDescription("Associate Training Coordinator");
		trainer.setMaximumSalary(39000);
		trainer.setMinimumSalary(34000);
		trainer.setExpireDate(LocalDate.parse("2016-06-12").plusDays((long) Math.random() * 300));

		List<Position> larrysPositions = new ArrayList<Position>();
		larrysPositions.add(trainer);

		Applicant larryDude = new Applicant();
		larryDude.setHuman(larry);
		larryDude.setApplications(larrysPositions);
		larryDude.setLinkedInId("leisuresuitlarry");

		applicants.add(larryDude);

		return applicants;
	}
	
	public List<Position> getPositions() {
		
		List<Position> list = new ArrayList<Position>();

		Position position = new Position(1);
		position.setDescription("Associate Training Coordinator");
		position.setMaximumSalary(39000);
		position.setMinimumSalary(34000);
		position.setExpireDate(LocalDate.parse("2016-06-12").plusDays((long) Math.random() * 300));
		
		list.add(position);
		
		position = new Position(2);
		position.setDescription("Engineering Manager");
		position.setMaximumSalary(39000);
		position.setMinimumSalary(34000);
		position.setExpireDate(LocalDate.parse("2016-06-12").plusDays((long) Math.random() * 300));
		
		list.add(position);
		
	    position = new Position(3);
		position.setDescription("Scrum Blaster");
		position.setMaximumSalary(39000);
		position.setMinimumSalary(34000);
		position.setExpireDate(LocalDate.parse("2016-06-12").plusDays((long) Math.random() * 300));
		
		list.add(position);
		
		return list;
	}
	public String echo(String name) {
		String msg = (name == null || name.trim().length() < 1) ? 
				"Hello, world - you didn't send a string" : "Hello, " + name + "!";
		return msg;
	}
}
