Meteor.startup(function() {
  var num = Stocks.find().count();

  if (num === 0) {
    var fixtures =  [
      { symbol: 'ASX.AX' },
      { symbol: 'ANZ.AX' },
      { symbol: 'BXB.AX' },
      { symbol: 'WBC.AX' },
      { symbol: 'IAG.AX' },
      { symbol: 'CBA.AX' },
      { symbol: 'BHP.AX' },
      { symbol: 'GOOG' },
      { symbol: 'AMZN' },
      { symbol: 'MSFT' }
    ];

    fixtures.forEach(function(element) {
      Stocks.insert(element);
    });
  }
});
