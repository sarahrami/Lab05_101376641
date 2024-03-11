// var greeter = function(name){
//     console.log('Hello ' + name)
// }

// greeter("John Smith")

// --------- commented top code out to rewrite the code block below ---------

let greeter = (firstName: string, lastName: string) => {
    console.log(`Hello ${firstName} ${lastName}`);
}

greeter("John", "Smith");
