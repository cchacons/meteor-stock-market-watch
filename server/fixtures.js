Meteor.startup(function() {
  var num = Stocks.find().count();

  if (num === 0) {
    var fixtures =  [
      { symbol: 'GOOG' },
      { symbol: 'AMZN' },
      { symbol: 'MSFT' },
      { symbol: 'FB' },
      { symbol: 'AAPL' },
      { symbol: 'YHOO' }
    ];

    fixtures.forEach(function(element) {
      Stocks.insert(element);
    });
  }
});
