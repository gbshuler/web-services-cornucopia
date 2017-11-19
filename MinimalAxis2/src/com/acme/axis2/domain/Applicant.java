package com.acme.axis2.domain;

import java.util.List;

public class Applicant {
	private List<Position> applications;
	private Human human;
	private String linkedInId;
	public List<Position> getApplications() {
		return applications;
	}
	public void setApplications(List<Position> applications) {
		this.applications = applications;
	}
	public Human getHuman() {
		return human;
	}
	public void setHuman(Human human) {
		this.human = human;
	}
	public String getLinkedInId() {
		return linkedInId;
	}
	public void setLinkedInId(String linkedInId) {
		this.linkedInId = linkedInId;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((applications == null) ? 0 : applications.hashCode());
		result = prime * result + ((human == null) ? 0 : human.hashCode());
		result = prime * result + ((linkedInId == null) ? 0 : linkedInId.hashCode());
		
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
		Applicant other = (Applicant) obj;
		if (applications == null) {
			if (other.applications != null)
				return false;
		} else if (!applications.equals(other.applications))
			return false;
		if (human == null) {
			if (other.human != null)
				return false;
		} else if (!human.equals(other.human))
			return false;
		if (linkedInId == null) {
			if (other.linkedInId != null)
				return false;
		} else if (!linkedInId.equals(other.linkedInId))
			return false;
		return true;
	}
	

	
}