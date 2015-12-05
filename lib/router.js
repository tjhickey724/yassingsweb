Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here .... 
});

Router.route('/', {name: 'welcome'});

Router.route('/bios');
Router.route('/calendar');
Router.route('/contact');
Router.route('/login');
Router.route('/booking');
Router.route('/setlist');
Router.route('/thanks');
Router.route('/videos');
Router.route('/showbookings');