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

//1. NUMBER OF MALES

function numberMales(collection) {
    
var genders = _.pluck(collection, "gender");

var malesArray = _.filter(genders, function(males){
    return males === "male";
});

return malesArray.length;

}

console.log(numberMales(customers));

//2. NUMBER OF FEMALES

function numberFemales(collection){

var genders = _.pluck(collection, "gender");

var femalesArray = _.filter(genders, function(females){
    return females === "female";
});

return femalesArray.length;

}

console.log(numberFemales(customers));

//3. NAME/AGE OF OLDEST CUSTOMER

function findOldest(collection){
var ages = _.pluck(collection, "age");

var oldest = Math.max.apply(Math, ages);

var oldestData = {};

_.each(customers, function(v, i, a){
    if(v.age === oldest){
        oldestData.name = v.name;
        oldestData.age =  v.age;
    }
});
return oldestData;
}

console.log(findOldest(customers));

//4. NAME/AGE OF YOUNGEST CUSTOMER

function findYoungest(collection){
var ages = _.pluck(collection, "age");
var youngest = Math.min.apply(Math, ages);

var youngestData = {};

_.each(customers, function(v, i, a){
    if(v.age === youngest){
        youngestData.name = v.name;
        youngestData.age =  v.age;
    }
});

return youngestData;
}

console.log(findYoungest(customers));

//5. AVERAGE BALANCE OF ALL CUSTOMERS

function averageBal(collection){
var balances = _.pluck(collection, "balance");
var newBalances = [];

_.each(balances, function(v, i, a){
    var noCommas = v.replace(/,/g, "");
    var noDollarS = noCommas.replace(/\$/g, "");
    newBalances.push(noDollarS);
});

var balancesTotal = 0;

_.each(newBalances, function(v, i, a){
   balancesTotal += Number(v); 
});

var average = balancesTotal / balances.length; 
return average;
}

console.log(averageBal(customers));

//6. NUMBER OF CUSTOMERS THAT BEGIN WITH A LETTER

function isLetter(collection, letter) {
var names = _.pluck(collection, "name");

var filtered = _.filter(names, function(value, index){
    return value[0] === letter.toUpperCase();
});

return filtered.length;
}

console.log(isLetter(customers, "s"));

//7. NAMES OF A CUSTOMERS' FRIENDS THAT BEGIN WITH A LETTER

function friendsWithLetter(collection, customerName, letter) {
var filtered = _.filter(collection, function(value){
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

console.log(friendsWithLetter(customers, "adele mullen", "j"));

//8. FIND ALL CUSTOMERS WHO LIST A GIVEN CUSTOMER AS A FRIEND

/* function isFriend(friendName){
    
}

console.log(isFriend("Cooley Jiminez")); */

//9. FIND TOP 3 MOST COMMON TAGS

var allTags = _.pluck(customers, "tags");

var tagsString =  allTags.join(",");

var tagsArray = tagsString.split(",");

console.log(tagsArray);