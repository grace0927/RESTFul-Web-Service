/**
 * 
 */
package com.fengs.service;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * @author feng
 *
 */
@Path("/ftocservice")
public class FtoCService {
	  @GET
	  @Produces("application/json")
	  public Response convertFtoC() throws JSONException {
	
		JSONObject jsonObject = new JSONObject();
		Double fahrenheit = 98.24;
		Double celsius;
		celsius = (fahrenheit - 32)*5/9; 
		jsonObject.put("f", fahrenheit); 
		jsonObject.put("c", celsius);
	
		String result = ""+jsonObject;
		return Response.status(200).entity(result).build();
	  }
}
