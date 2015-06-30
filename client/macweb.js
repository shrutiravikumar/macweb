Router.route('/', {name: 'macweb'});

Template.macweb.rendered = function () {
  $('.map').maphilight();
};