Router.configure({
  layoutTemplate: 'Base'
});



Router.route('/', function () {
	if (! Meteor.user()) {
		this.render('landing');
	} else {
		this.redirect('/blog');
	}
	
});


var requireLogin = function() { 
	if (! Meteor.user()) {
		this.render('landing');
		} else { 
		  this.next();
		}
	} 
// Before any routing run the requireLogin function. 
// Except in the case of "landingpage". 
// Note that you can add more pages in the exceptions if you want. (e.g. About, Faq, contact...) 
Router.onBeforeAction(requireLogin, {except: ['landing']});	

/// i need to get the urls not all working the way they do ... janky
// also must add admin config 