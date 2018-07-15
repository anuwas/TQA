package com.org.anu.rest.database;

import java.util.HashMap;
import java.util.Map;
import com.org.anu.rest.model.Message;
import com.org.anu.rest.model.Profile;

public class Database {
	
	public static Map<Long,Message> message = new HashMap<>();
	public static Map<Long,Profile> profile = new HashMap<>();
	
	public static Map<Long, Message> getMessages(){
		return message;
	}
	
	public static Map<Long,Profile> getProfiles(){
		return profile;
	}
}
