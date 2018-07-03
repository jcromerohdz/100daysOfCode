//JS Promises

// function addExtra(price) {
//     return new Promise(function(resolve, reject){
//         if (price > 2) reject("Price cannot exceed 3");

//         setTimeout(function(){
//            resolve(price + 1); 
//         }, 300);
//     });
// }

// addExtra(10).then(function(newPrice){
//     console.log(newPrice);
// }).catch(function(error){
//     console.log(error);
// })

//JS promises stand alone
let price = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve(99.99);
    }, 300);
})

price.then(function(price){
    console.log(price);
})


// Classic callback
// function addExtra(price, callback) {
//     setTimeout(function(){
//         callback(price + 1);
//     }, 300);
// }

// addExtra(1, function(newPrice){
//     console.log(newPrice);
// });