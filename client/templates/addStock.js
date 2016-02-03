Template.addStock.events({
  'submit #addStock': function(event) {
    event.preventDefault();

    var data = {
      symbol: event.target.querySelector('#symbol').value
    };

    Meteor.call('addStock', data, function(err, result) {
      console.log('result',result);
      if (err) {
        console.log(err);
        sAlert.error(err.reason);
      }
    });

    // reset form (clear fields)
    event.target.reset();
  }
});
