if (Meteor.isClient) {
	Blog.config ({  
		blogShowTemplate: 'show_blog', 
		blogNotFoundTemplate: 'notFound',
		comments: {
			disqusShortname: 'websiteredesign'
		}	
	});
}
  
   
    