const promise = new Promise (function(resolve, reject) {

    resolve("Hey!");

});

const cows = Math.floor(Math.random() * 31);

const countCows = new Promise (function(resolve, reject) {

    if (cows > 10) {
        resolve (`We have ${cows} cows on the farm`);
    } else {
        reject ("There is no cows on the farm");
    };

});

countCows.then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
}).finally(() => console.log("Finally!"));

