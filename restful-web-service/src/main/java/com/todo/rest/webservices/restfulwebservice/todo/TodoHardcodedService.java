package com.todo.rest.webservices.restfulwebservice.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {
	
	private static List<Todo> todos = new ArrayList();
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
		if(todos.remove(todo)){
			return todo;
		}		
	}

	public Todo findById(long id) {
		for(Todo todo : todos) {
			if(todo.getId()==id) {
				return todo;
			}
		}		
		return null;
	}

}
