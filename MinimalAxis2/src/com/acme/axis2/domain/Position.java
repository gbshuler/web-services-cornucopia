package com.acme.axis2.domain;

import java.time.LocalDate;

public class Position {
	public Position(int number) {
		this.number = number;
	}
	
    private String description;
    private int number;  // PK
    private int minimumSalary;
    private int maximumSalary;
    private LocalDate expireDate;
    
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getMinimumSalary() {
		return minimumSalary;
	}
	public void setMinimumSalary(int minimumSalary) {
		this.minimumSalary = minimumSalary;
	}
	public int getMaximumSalary() {
		return maximumSalary;
	}
	public void setMaximumSalary(int maximumSalary) {
		this.maximumSalary = maximumSalary;
	}
	public LocalDate getExpireDate() {
		return expireDate;
	}
	public void setExpireDate(LocalDate expireDate) {
		this.expireDate = expireDate;
	}
	public int getNumber() {
		return number;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + number;
		return result;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Position other = (Position) obj;
		if (number != other.number)
			return false;
		return true;
	}  
}