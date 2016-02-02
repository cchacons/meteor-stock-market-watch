Stocks = new Mongo.Collection('stocks');

Meteor.methods({
  addStock: function(data) {
    Stocks.insert(data);
  },
  deleteStock: function(id) {
    Stocks.remove(id);
  }
});
