# lets-get-functional

An exercise in problem solving in the functional idiom.

## Setup

0. **FORK** this repository on GitHub to your own GitHub account.

1. From your FORK, use SSH to clone the repository into a Blank Cloud9 workspace.

2. Once the Cloud9 workspace is finished initializing, from the bash terminal, run the command:
    
        npm install

3. Install your lodown library by running the command and replacing `<my-user-name>` :
    
        npm install --save lodown-<my-user-name>

4. Node is smart enough to find installed modules when you `require()` them by name. Open up `index.js` and import your lodown library using the node `require()` method like:

    `const _ = require("lodown-<my-github-user-name>");`

    Be sure to replace `<my-user-name>` with your actual username, duh. ;P

## Solve

Code and test your solutions in `index.js`. Customer data is available to you in the Array, `customers`. Utilizing your lodown library, write functions that take the Array of customers and return the following (`console.log()` the results):

1. Find the number of males.
2. Find the number of females.
3. Find the name and age of the oldest customer. 
4. Find the name and age of the youngest customer.
5. Find the average balance of all the customers.
6. Find how many customers' names begin with an arbitrary letter. Write a function to answer this question, then log an answer.
7. Find how many customers' _friends'_ names begin with an arbitrary letter. Write a function to answer this question, then log an answer.
8. Find how many customers are friends with a customer (by name).
9. Find the top 3 most common tags among the customers.
10. Create a summary of genders, the output should be:
    
```javascript
{
    male: 3,
    female: 4,
    transgender: 1
}
```

Remember, in the node.js environment, you can both `console.log()` or use the dubugger to step through your code and inspect your work.
