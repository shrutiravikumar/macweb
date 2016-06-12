// Routes for site navigation
FlowRouter.route('/', {
    action: function(params, queryParams) {
      BlazeLayout.render('macweb');
    }
});

FlowRouter.route('/about', {
    action: function(params, queryParams) {
      BlazeLayout.render('about');
    }
});

FlowRouter.route('/desk', {
    action: function(params, queryParams) {
      BlazeLayout.render('desk');
    }
});

FlowRouter.route('/dininghall', {
    action: function(params, queryParams) {
      BlazeLayout.render('dininghall');
    }
});

FlowRouter.route('/entry/g', {
    action: function(params, queryParams) {
      BlazeLayout.render('entryG');
    }
});

FlowRouter.route('/entry/j', {
    action: function(params, queryParams) {
      BlazeLayout.render('entryJAbout');
    }
});
FlowRouter.route('/entry/j/about', {
    action: function(params, queryParams) {
      BlazeLayout.render('entryJAbout');
    }
});
FlowRouter.route('/entry/j/residents', {
    action: function(params, queryParams) {
      BlazeLayout.render('entryJResidents');
    }
});
FlowRouter.route('/entry/j/traditions', {
    action: function(params, queryParams) {
      BlazeLayout.render('entryJTraditions');
    }
});
FlowRouter.route('/entry/j/photos', {
    action: function(params, queryParams) {
      BlazeLayout.render('entryJPhotos');
    }
});
FlowRouter.route('/entry', {
    action: function(params, queryParams) {
      BlazeLayout.render('entry');
    }
});

FlowRouter.route('/housecomm', {
    action: function(params, queryParams) {
      BlazeLayout.render('housecomm');
    }
});
FlowRouter.route('/maccon', {
    action: function(params, queryParams) {
      BlazeLayout.render('maccon');
    }
});

FlowRouter.route('/rex', {
    action: function(params, queryParams) {
      BlazeLayout.render('rex');
    }
});
FlowRouter.route('/support', {
    action: function(params, queryParams) {
      BlazeLayout.render('support');
    }
});

FlowRouter.route('/(.*)', {
    action: function(params, queryParams) {
      BlazeLayout.render('macweb');
    }
});