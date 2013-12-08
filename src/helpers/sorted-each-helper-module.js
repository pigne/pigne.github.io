var _ = require('lodash');

module.exports.register = function (Handlebars, options)  { 
  Handlebars.registerHelper('sortedEach', function (array, field, options) {
    
    /*array = _.select(array, function(item){
      return typeof item.data[field] !== 'undefined'
    });*/
    
    array = _.sortBy(array, function(item){
      return item.data[field];
    });

    return _.reduce(array, function(sum, num){
      return sum + options.fn(num)
    }, '');
  });
};