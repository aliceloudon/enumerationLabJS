var Enumeration = function() {}

Enumeration.prototype = {

find: function(array, callback) {
  var result;
  array.forEach(function (element) {
    if (callback(element) === true) { 
      result =  element}
  })
  return result
},
map: function(array, callback){
  var result = [];
  array.forEach(function(element){
    result.push(callback(element));
  })
return result;
},
filter: function(array, callback){
  var result = [];
  array.forEach(function(element){
    if(callback(element) === true){
    result.push(element);}
  })
return result;
},
some: function(array, callback){
  var result;
  array.forEach(function(element){
      if(callback(element) === true){
        result = true
      }else{
        result =false
      }
    })
  return result
  },
  every: function(){
    
  }


}

module.exports = Enumeration;