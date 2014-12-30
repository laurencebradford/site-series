if (Meteor.isClient) {
	Blog.config ({  
		blogShowTemplate: 'show_blog', 
		comments: {
			disqusShortname: 'websiteredesign'
		}	
	});
}
  
   
    