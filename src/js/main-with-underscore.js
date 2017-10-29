var _ = require('underscore');

// DOM is ready
require('domready')(function () {
    var arr = [1, 2, 3, 4, 5];
    // using foreach
    _.each(arr, function (value, key, array) {
        console.log(key, ":", value);
        // value === 1, 2, 3 
        // key === 0, 1, 2 
        // array === [1, 2, 3] 
    });

    // using reduce
    var sum = _.reduce(arr, function (acc, x){
        return acc + x;
    }, 0);
    console.log(sum);

    //using filter
    var odd_nums = _.filter(arr, function(value, index){
        return value / 2 !== parseInt(value / 2);
    });
    console.log(odd_nums);

    // using map
    var sqrs = _.map(arr, function(value){
        return value ** 2;
    });
    console.log(sqrs);
});

