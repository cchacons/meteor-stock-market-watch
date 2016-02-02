Template.stocks.helpers({
  stocks: function() {
    var entries;
    if (Session.get('filter')=='up') {
      entries = Stocks.find({ change: {$gt:0}});
    } else
    if (Session.get('filter')=='down') {
      entries = Stocks.find({ change: {$lt:0}});
    } else {
      entries = Stocks.find();
    }
    return entries;
  },
  // sessionExample: function() {
  //   return Session.get('filter');
  // }

  cssPriceClass: function() {
    var newClass = '';
    if (this.change > 0) {
      newClass = 'price-up';
    }
    else if (this.change < 0) {
      newClass = 'price-down';
    }
    return newClass;
  },

});

Template.stocks.events({
  'click #delete': function(event){
    Meteor.call('deleteStock', this._id);
  },

  'change #stock-filter' : function(event) {
    // store filter to session variable
    Session.set('filter', event.target.value);
  },

  'click .stockListing': function() {
    var name = this.name;
    var symbol = this.symbol;
    Meteor.call("getData", this.symbol, function(error, result){
      if(result){
        var currentPrice = result[result.length-1].close.toFixed(2);
        SelectedStock.set({
          name: name,
          symbol: symbol,
          data: result,
          price: currentPrice
        });
      }
    });
  }

});
