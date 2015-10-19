Template.booking.events({
	'submit #Signup': function(event){
		event.preventDefault();
		var firstname= $("#firstname").val();
		var lastname= $("#lastname").val();
		var email= $("#email").val();
		var phone= $("#phone").val();
		var eventtype= $("#eventtype").val();
		var combosize= $("#combosize").val();
		var eventdate= $("#eventdate").val();
		var eventlocation= $("#eventlocation").val();
		var descr= $("#descr").val();
		
		
		var info={
			firstname:firstname,
			lastname:lastname,
			email:email,
			phone:phone,
			eventtype:eventtype,
			combosize:combosize,
			eventdate:eventdate,
			eventlocation:eventlocation,
			descr:descr
		};
		
		
		Mailinglist.insert(info);
		console.dir(info);
		Router.go('thanks')
	},
	
	'click .remover': function(event){
		Mailinglist.remove(this._id);
	}
})


Template.booking.helpers({
	bookinginfo: function(){
		return Mailinglist.find();
	}
})