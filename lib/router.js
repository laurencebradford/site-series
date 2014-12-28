Router.route('/', function () {
  this.render('post_stream');
});

Router.route('/dashboard', function () {
  this.render('dashboard');
});

Router.configure({
  layoutTemplate: 'Base'
});