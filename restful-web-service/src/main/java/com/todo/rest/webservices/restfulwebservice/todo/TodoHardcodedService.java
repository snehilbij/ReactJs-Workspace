package com.todo.rest.webservices.restfulwebservice.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {
	
	private static List<Todo> todos = new ArrayList<Todo>();
	private static int idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "snehil_sharma", "Learn ReactJs", new Date(), false));
		todos.add(new Todo(++idCounter, "snehil_sharma", "Learn Spring Boot", new Date(), false));
		todos.add(new Todo(++idCounter, "snehil_sharma", "Learn Data Science", new Date(), false));
		todos.add(new Todo(++idCounter, "snehil_sharma", "Learn Mocroservices", new Date(), false));
	}
	
	public List<Todo> findAll(){
		return todos;
	}
	
	
	 public Todo deleteById(long id) {
		 Todo todo = findById(id); 
		 if(todo == null) 
			 return null; 
		 else if(todos.remove(todo)){ 
			 return todo; 
			 } 
		 else
			 return null;
		 }
	

	public Todo findById(long id) {
		for(Todo todo : todos) {
			if(todo.getId()==id) {
				return todo;
			}
		}		
		return null;
	}
	
	public Todo save(Todo todo) {
		if(todo.getId()==-1) {
			todo.setId(++idCounter);
			todos.add(todo);
		}else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}

}
