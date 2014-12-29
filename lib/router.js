Router.route('/', function () {
	this.render('post_stream');
//  var isLoggedIn = Session.get('isLoggedIn');
// below added from eventedmind video .. not matching my 
// stuff just yet 
  // if (isLoggedIn)
  //	this.render('post_stream');
  // else
  // 	this.render('Login');
});

Router.route('/login', function() {
	this.render('login');
});



Router.configure({
  layoutTemplate: 'Base'
});