#!/usr/bin/env node

'use strict';

const _ = require("lodown-violet-suber");
const customers = require("./data/customers.json");


/**
 * 1. Import your lodown module using the require() method, 
 *    using the string 'lodown-<my-username>', or whatever 
 *    name with which you published your npm lodown project.
 * 
 * 2. Solve all problems as outlined in the README.
 */

var genders = _.pluck(customers, "gender");

//1. NUMBER OF MALES

var malesArray = _.filter(genders, function(males){
    return males === "male";
});

var numberMales = malesArray.length;

console.log(numberMales);

//2. NUMBER OF FEMALES

var femalesArray = _.filter(genders, function(females){
    return females === "female";
});

var numberFemales = femalesArray.length;

console.log(numberFemales);

var ages = _.pluck(customers, "age");

console.log(ages);

//3. NAME/AGE OF OLDEST CUSTOMER

var oldest = Math.max.apply(Math, ages);

_.each(customers, function(v, i, a){
    _.each(v, function(key, obj){
        if (obj.age === oldest) {
            console.log(v);
        }
    });
});

//Find the object in customers that contains age: oldest and return name and age

//4. NAME/AGE OF YOUNGEST CUSTOMER

var youngest = Math.min.apply(Math, ages);

//Find the object in customers that contains age: oldest and return name and age

//5. AVERAGE BALANCE OF ALL CUSTOMERS

var balances = _.pluck(customers, "balance");

_.each(balances, function(v, i, a){
    v.replace("$", "");
});

console.log(balances);

//Take off dollar signs and commas, convert string to number, add all together and divide by balances.length

//6. NAMES OF CUSTOMERS THAT BEGIN WITH A LETTER

var names = (_.pluck(customers, "name"));

function isLetter(letter) {

var filtered = _.filter(names, function(value, index){
    return value[0] === letter.toUpperCase();
});

return filtered.length;
}

console.log(isLetter("s"));

//7. NAMES OF A CUSTOMERS' FRIENDS THAT BEGIN WITH A LETTER

function friendsWithLetter(customerName, letter) {
var filtered = _.filter(customers, function(value){
    var noCase = value.name.toUpperCase();
    var noCase2 = customerName.toUpperCase();
    return noCase === noCase2;
});

var customerFriends = _.pluck(filtered, "friends");
var friendsArray = customerFriends[0];
var justFriends = _.pluck(friendsArray, "name");

var filter2 = _.filter(justFriends, function(value, index){
    return value[0] === letter.toUpperCase();
});
return filter2.length;
}

console.log(friendsWithLetter("adele mullen", "j"));

//8. FIND ALL CUSTOMERS WHO LIST A GIVEN CUSTOMER AS A FRIEND

function isFriend(friendName){
    
}

console.log(isFriend("Cooley Jiminez"));

//9. FIND TOP 3 MOST COMMON TAGS

var allTags = _.pluck(customers, "tags");

var tagsString =  allTags.join(",");

var tagsArray = tagsString.split(",");

console.log(tagsArray);