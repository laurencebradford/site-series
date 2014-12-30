// need to add admin roles. 

if (Meteor.isServer) {
  Meteor.startup(function () {
  	Blog.config ({adminRole: 'blogAdmin', authorRole: 'blogAuthor'});
  });
}


/* 
above works, but janky. and i cant add my posts! 
need to add exception just for me.
i think this is my id ... Tqj3r483sq4zuje2W 
so I need to attach that ID to blog admin. 

other instance online ... uses other package
Meteor.startup(function () {
    // This is temporary
    if (Meteor.users.findOne("Nvu2wZRg3K2wd4j4u"))
        Roles.addUsersToRoles("Nvu2wZRg3K2wd4j4u", ['admin']);
  });

*/