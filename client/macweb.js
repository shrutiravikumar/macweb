Router.route('/(.*)[^\.]', {name: 'macweb'});
Router.route('/', {name: 'macweb'});

Template.macweb.rendered = function () {
  $('img[usemap]').maphilight()
};
