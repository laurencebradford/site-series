Router.route('/', function () {
  this.render('post_stream');
});

Router.configure({
  layoutTemplate: 'Base'
});