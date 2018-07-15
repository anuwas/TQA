package com.org.anu.rest.resources;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.org.anu.rest.model.Message;
import com.org.anu.rest.service.MessageService;

@Path("/messages")
public class MessageResource {
	
	MessageService ms = new MessageService();
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Message> getMessages() {
		
		return ms.getAllMessages(); 
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public String addMessages(Message message) {
		return ms.addMessage(message);
	}
	
	@PUT
	@Path("/{messagesId}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Message updateMessages(@PathParam("messagesId") Long messagesId , Message message) {
		message.setId(messagesId);
		return ms.updateMessage(message);
	}
	
	@DELETE
	@Path("/{messagesId}")
	@Produces(MediaType.APPLICATION_JSON)
	public void deleteMessages(@PathParam("messagesId") Long messagesId) {
		ms.deleteMessage(messagesId);
	}
	
	@GET
	@Path("/{messagesId}")
	@Produces(MediaType.APPLICATION_XML)
	public Message getMessage(@PathParam("messagesId") Long messagesId) {
		return ms.getMessage(messagesId);
	}
}
