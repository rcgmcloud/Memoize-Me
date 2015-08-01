function Memoize(fn){
  var cache = {};

  return function retrieve(x){
    //console.log(x);
    //calculates
    if (cache.hasOwnProperty(x)){
      console.log("Retrieved from cache");
      //retrieve from cache
      return cache[x];
    } else {
      //store in cache
      console.log("Retrieved the regular way");
      cache[x] = fn(x);
      console.log(cache);
      //retrieve from DOM
      return cache[x];
    }
  };
}

var something = Memoize(console.log);
//var byId = Memoize(document.getElementById);
//var select = Memoize(document.querySelector);

something(2);
something(2);

//byId("userscore");