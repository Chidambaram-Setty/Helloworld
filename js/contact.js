//Document ready function
$(document).ready(function() {
		
		//focus on reservation textbox
		$("#name").focus();
		
		//Validate form
		$("#contact_form").validate({
			rules: {
				//Validate name textbox required				
				name:{
					required: true,
				},
				
				//Validate email textbox with valid email id
				email:{
					required: true,
					email: true
				},
				
				phone:{
					required: true,
					phoneUS: true
				},
				
				//Validate date with required and date type				
				dateofbirth:{
					required: true,
					date: true
				}
			},
			messages: {
				//add custom message for night textbox 
				name:{
					required: "Email is required",
					Phone: "Please enter your 10 digit mobile number",
					date:"Please enter valid date"
				}
			}
		})

}); // end ready
