// need to add admin roles. 

if (Meteor.isServer) {
  Meteor.startup(function () {
    Blog.config ({adminRole: 'blogAdmin', authorRole: 'blogAuthor'})
  });
}
// above works, but janky. and i cant add my posts! need to add exception just for me.

