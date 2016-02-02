Template.addStock.events({
  'submit #addStock': function(event) {
    event.preventDefault();

    var data = {
      symbol: event.target.querySelector('#symbol').value
    };

    Meteor.call('addStock', data);

    // reset form (clear fields)
    event.target.reset();
  }
});
