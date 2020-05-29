package com.todo.rest.webservices.restfulwebservice.todo;

public class IsCompleted {
	
	private long id;
	private String name;
	
	protected IsCompleted() {
		
	}	
	
	public IsCompleted(long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	

}
