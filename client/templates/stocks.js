Template.stocks.helpers({

  stocks: function() {
    var entries;
    var filter = {};

    if (Session.get('filter')=='up') {
      filter = { change: {$gt:0} };
    } else
    if (Session.get('filter')=='down') {
      filter = { change: {$lt:0} };
    }

    //return Stocks.find({owner: Meteor.userId()}, {sort: ["symbol", "asc"]});
    entries = Stocks.find(filter);
    return entries;
  },

  selected: function () {
    return Session.equals("selectedStock", this._id) ? "selected" : '';
  },

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
    Session.set("selectedStock", this._id);
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
