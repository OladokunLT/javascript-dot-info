// Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.

// Destructuring also works great with complex functions that have a lot of parameters, default values, and so on. Soon we’ll see that.

// Array destructuring

// let arr = ['Lukman', 'Oladokun']
// let [firstName, LastName] = arr;
// console.log(firstName, LastName); // Lukman Oladokun

// _________
// It looks great when combined with split or other array-returning methods:
// let [firstName, lastName] = "Lukman Oladokun".split(' ');
// console.log(firstName) // Lukman
// console.log(lastName) // Oladokun

// _________
// Unwanted elements of the array can also be thrown away via an extra comma:
/**
 let [firstName, , title] = ["Lukman", "Oladokun", "CEO", "of L&K Digital Services" ];
 console.log(title);
*/

// Works with any iterable on the right-side.
/** 
 let [a, b, c] = "abc"; // [ 'a', 'b', 'c' ]
 console.log(typeof b); // 'b'
*/

/* // with set
let set = new Set([1, 2, 3])
console.log(set); // Set(3) { 1, 2, 3 }
let [one, two, three] = set;
console.log(typeof one, two, three); // 1 , 2 ,3
*/

// ____ Assign to anything at the left-side
/* 
let user = {};
[user.firstname, user.surname] = "Lukman Oladokun".split(" ");
console.log(user); // { firstname: 'Lukman', surname: 'Oladokun' }
console.log(user.firstname); // "Lukman"
*/

//______ Looping with .entries()
/* 
let user = {
    name: 'Lukman',
    age: 100
}
console.log(Object.entries(user)); // [ [ 'name', 'Lukman' ], [ 'age', 100 ] ]
for (const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`); // name: Lukman, then age: 100
}
*/

//______ The similar code for a Map is simpler, as it’s iterable:
/**
 let user = new Map();
 user.set('name', 'Lukman');
 user.set('age', '100'); 
 console.log(user); // Map(2) { 'name' => 'Lukman', 'age' => '100' } 
 
 for (const [key, value] of user) {
     console.log(`${key}: ${value}`); // name: Lukman, then age: 100
 }
 */

 //______ Swap variables trick
/**
 let guest = 'Tamedu';
 let admin = 'Ogbeni';
 [guest, admin] = [admin, guest]
 console.log(`${guest} ${admin}`);
 */
 
//________ The rest ‘…’
/**
 let [firstName, surname, ...rest] = ["Lukman", "Oladokun", "CEO", "of L&K Digital Services" ];
 console.log(rest); // [ 'CEO', 'of L&K Digital Services' ]
 console.log(rest[0]); // CEO
 console.log(rest[1]); // of L&K Digital Services
 console.log(rest.length); // 2
 */

 // ______ Default values
//  let [firstName, surname] = [];
//  console.log(firstName, surname); //undefine undefine

// let [name = prompt('name?'), surname = prompt("surnmae?")] = ["Lukman"]
// console.log(name); // Lukman from array
// console.log(surname); // Anonymous form default
 
// Object destructuring
// The basic syntax
// let {var1, var2} = {var1: ..., var2 ...}

// let options = {
//     title: 'Menu',
//     width: 100,
//     height: 200
// };
// let {title, width, height} = options;
// console.log(title, width, height);
// let {height, width, title} = options;
// console.log(height, width, title); // 200 100 Menu

// let options = {
//     title: 'Menu',
//     width: 100,
//     height: 200
// };
// let {width: w, height: h, title} = options;
// console.log(title, w, h); // Menu 100 200

// let options = {
//     title: 'Menu',
//     width: 100,
//     height: 200
// };
// let {title} = options; 
// console.log(title); // Menu

// let options = {
//     title: 'Menu',
//     width: 100,
//     height: 200
// };
// let {title, ...rest } = options;
// title = property named title
// rest = object with the rest of properties
// now title = "Menu", rest={width:100, height:200}
// console.log(title, rest.height, rest.width);


// let title, width, height;
// erro in this line
// {title, width, height} = {title: 'Menu', width: 100, height: 200};
// ({title, width, height} = {title: 'Menu', width: 100, height: 200});
// console.log(title, height);

// let options = {
//     size: {
//       width: 100,
//       height: 200
//     },
//     items: ["Cake", "Donut"],
//     extra: true
//   };
  
//   let {...rest} = options;
//   console.log(rest); // Donut

//____ Smart function parameters
// let options = {
//     title: 'Lukman',
//     items: ['Item1', 'Item2']
// };
// function showMenu(title="Untitled", width=200, height=100, items=[]) {
//     console.log(title, width, items);

// }
// console.log( showMenu(options) )

// let user = {name: 'John', year: 30}
// let {name, year:age, isAdmin=false } = user;
// console.log(name, age, isAdmin);


let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250
};

function topSalary(salaries) {
    let arr = Object.entries(salaries);
    let highestPaid
    let max = 0;
    // for (const [key, value] of arr) {
    //     if (value>max) {
    //         max = value
    //         highestPaid = key    
    //     }
    // }
    arr.forEach(([key, value])=>{
        if (value>max) {
                    max = value
                    highestPaid = key    
                }
    })
    return highestPaid
}
console.log( topSalary(salaries) )