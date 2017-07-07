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

var oldestArray = [];

_.each(customers, function(v, i, a){
    if(v.age === oldest){
        var oldestData = {};
        oldestData.name = v.name;
        oldestData.age =  v.age;
        oldestArray.push(oldestData);
    }
});
return oldestArray;
}

console.log(findOldest(customers));

//4. NAME/AGE OF YOUNGEST CUSTOMER

function findYoungest(collection){
var ages = _.pluck(collection, "age");
var youngest = Math.min.apply(Math, ages);

var youngestArray = [];

_.each(customers, function(v, i, a){
    if(v.age === youngest){
        var youngestData = {};
        youngestData.name = v.name;
        youngestData.age =  v.age;
        youngestArray.push(youngestData);
        }
});

return youngestArray;
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
var averageRounded = Math.round(average * 100) / 100;
//I found this solution online about how to add commas in 4+ digit numbers and read up more on regex to understand how it works
var averageString = averageRounded.toString();
var averageArray = averageString.split(".");
averageArray[0] = averageArray[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
var finalAverage = averageArray.join(".");

return "$" + finalAverage;
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
    return value.name.toUpperCase() === customerName.toUpperCase();
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

function isFriend(collection, friendName){
var friendsWith = [];
  _.each(collection, function(v, i, a){
    var friends = v.friends;
    var justNames = _.pluck(friends, "name");
   _.each(justNames, function(value, index, array){
        if (value.toUpperCase() === friendName.toUpperCase()) {
        friendsWith.push(v.name);
    } 
    });
   
  });
  return friendsWith;
}

console.log(isFriend(customers, "cooley jimenez"));

//9. FIND TOP 3 MOST COMMON TAGS

function findTop3(collection) {

var allTags = _.pluck(collection, "tags");

var tagsString =  allTags.join(",");

var tagsArray = tagsString.split(",");

var tagCount = {};

_.each(tagsArray, function(value, index, array){
    if (tagCount[value]) {
        tagCount[value] += 1;
    } else {
        tagCount[value] = 1;
    }
});

var topCounts = [];
var counter = 0;

_.each(tagCount, function(value, key, obj){
    if (value >= counter){
        counter = value;
        topCounts.unshift(key);
    }
});

var top3 = topCounts.slice(0, 3);

return top3; }

console.log(findTop3(customers));

//10. SUMMARY OF GENDERS

var genderSummary = _.reduce(customers, function(value, current){
    if (value[current.gender]){
        value[current.gender] += 1;
    } else {
        value[current.gender] = 1;
    }
    return value;
}, {});

console.log(genderSummary);