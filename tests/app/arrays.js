define([ 'use!underscore' ], function(_) {
  describe("arrays", function() {
    var a, b, fn;

    beforeEach(function() {
      a = [ 1, 2, 3, 4 ];
      b = {
        foo : 'bar',
        baz : 'bim'
      };

      fn = function() { };
    });

    it("you should be able to determine the location of an item in an array", function() {
      // define a function for fn so that the following will pass
      console.log("hello");
      fn = function(a, item) {
        return a.indexOf(item); 
      }
      expect(fn(a, 3)).to.be(2);
    });

    it("you should be able to add the values of an array", function() {
      // define a function for fn so that the following will pass
      fn = function(a) {
        var sum = 0;
        a.forEach(function(item, index) {
          sum += item;
        });
        return sum;
      }

      // fn = function(a) {
      //   var sum = 0;
      //   for(var i in a) {
      //     sum += a[i];  
      //   }
      //   return sum;
      // }
      expect(fn(a)).to.be(10);
    });

    it("you should be able to remove an item from an array", function() {
      // define a function for fn so that the following will pass
      fn = function(a, item) {
        a.splice(a.indexOf(item), 1);
        return a;
      }
      var result = fn(a, 2);
      expect(result).to.have.length(3);
      expect(result.join(' ')).to.be('1 3 4');
    });

    it("you should be able to add an item to the end of an array", function() {
      // define a function for fn so that the following will pass
      fn = function(a, item) {
        a.push(item);
        return a;
      }
      var result = fn(a, 10);
      expect(result).to.have.length(5);
      expect(result[result.length - 1]).to.be(10);
    });

    it("you should be able to create an array from two arrays", function() {
      // define a function for fn so that the following will pass
      var c = [ 'a', 'b', 'c' ],
      fn = function(a1, a2) {
        return a1.concat(a2);
      }
      var result = fn(a, c);
      expect(result).to.have.length(7);
      expect(result.join(' ')).to.be('1 2 3 4 a b c');
    });

    it("you should be able to add an item anywhere in an array", function() {
      // define a function for fn so that the following will pass
      fn = function(a, item, i) {
        a.splice(i, 0, item);
        return a;
      }
      var result = fn(a, 'z', 2);      
      expect(result).to.have.length(5);
      expect(result.join(' ')).to.be('1 2 z 3 4');
    });
  });
});
