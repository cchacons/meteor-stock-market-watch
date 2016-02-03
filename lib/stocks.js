Meteor.methods({
  addStock: function(data) {
    data.symbol = data.symbol.toUpperCase();
    if (Stocks.findOne(data)) {
      throw new Meteor.Error('duplicate-symbol', 'Stock already in list!');
    }

    if(Meteor.isServer){
      Meteor.call("getName", data.symbol, function(error, result){
        if(result !== "N/A"){
          data.name = result;
          Stocks.insert(data);
        }
      });
    }

  },

  deleteStock: function(id) {
    Stocks.remove(id);
  }
});
