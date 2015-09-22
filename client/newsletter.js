Template.newsletter.events({
	'submit #Signup': function(event){
		event.preventDefault();
		var email= $("#email").val();
		var birthdate= $("#birthdate").val();
		var country= $("#country").val();
		var zipcode= $("#zipcode").val();
		var getemail= $("#getemail").is(':checked');
		
		var info={
			email:email,
			birthdate:birthdate,
			country:country,
			zipcode:zipcode,
			getemail:getemail,
		};
		
		
		Mailinglist.insert(info);
		console.dir(info);
		Router.go('calendar')
	}
})


Template.newsletter.helpers({
	mailinfo: function(){
		return Mailinglist.find();
	}
})