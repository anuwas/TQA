package com.org.anu.rest.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import com.org.anu.rest.database.Database;
import com.org.anu.rest.model.Message;

public class MessageService {
	
	Map<Long,Message> messages = Database.getMessages();
	
	public MessageService() {
		Message m1 = new Message(1L, "Hello", new Date(), "Anupam");
		Message m2 = new Message(2L, "World", new Date(), "Biswas");
		messages.put(1L, m1);
		messages.put(2L, m2);
	}
	public List<Message> getAllMessages(){
		return new ArrayList<Message>(messages.values());
	}
	
	public Message getMessage(Long id) {
		return messages.get(id);
	}
	
	public String addMessage(Message message) {
		Message m3 = new Message(message.getId(), message.getMessage(), message.getCreatedDate(), message.getAuthor());
		messages.put(message.getId(), m3);
		return "added";
	}
	
	public Message updateMessage(Message message) {
		message.setAuthor(message.getAuthor());
		message.setMessage(message.getMessage());
		return message;
	}
	
	public void deleteMessage(Long messageId) {
		messages.remove(messageId);
	}
}
