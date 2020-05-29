package com.todo.rest.webservices.restfulwebservice.todo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class IsCompletedService {
	private static List<IsCompleted> iscompleted = new ArrayList<IsCompleted>();
	
	static {
		iscompleted.add(new IsCompleted(1, "Yes"));
		iscompleted.add(new IsCompleted(2, "No"));
	}
	
	public List<IsCompleted> findAll(){
		return iscompleted;
	}
}
