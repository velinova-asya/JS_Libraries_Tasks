// Underscore.js
// Assuming the JSON structure from the first task is loaded in the environment, 
// perform the following tasks using only underscore.js:


var obj = {
   "_id": "E241AD11-1557-4FD3-B21F-97D0FA4230C7",
   "_rev": "13-2c82a95b6558a4c6144b58f59720edc7",
   "fp_type": "ibeacon",
   "fp_owner": "global",
   "fp_ext_id": "bstg_autogen_1445345099899_62005859",
   "uuid": "B9407F30-F5F8-466E-AFF9-25556B57FE6D",
   "major": 37100,
   "minor": 51516,
   "label": "Icy Bond",

   "actions": [
       {
           "type": "home-block",
           "params": {
               "appearance": "text",
               "action": null
           }
       },

       {
           "type": "presence",
           "params": {
               "interval": 15
           }
       },

       {
          "type": "notification",
          "params": {
            "title": "text",
            "message": "text"
          }
       }
   ],

   "fp_last_changes": {
       "timestamp": 1445437699,
       "source": "dataloader_api",
       "host": "localhost.backstage.4pax.com"
   },

   "location": {
       "lat": -4.232423,
       "lng": 12.523098
   }
};


// 1. Extract action types

var actionsArray = obj.actions;

var actionsTypes = _.pluck(actionsArray, "type");
console.log("The action types are: " + actionsTypes);



// 2. Convert actions array into a object where the key is the actions' type and the value are its params:

var actionsObj = _.object(_.pluck(actionsArray, 'type'), _.pluck(actionsArray, 'params'));
console.log(actionsObj);



// 3. Calculate the sum and average for the following input (non-number elements should be ignored):

var input = ["0", 2, 4, 6, null, [], 8, 10];
var inputIntegers = _.map(input, function(num){ return num * 1; });
var onlyNums = _.filter(inputIntegers, function(num){ if (num !== 0) {return num; }});

var sum = _.reduce(onlyNums, function(memo, num){ return memo + num; }, 0);
console.log("The sum is = " + sum);

var average = sum / onlyNums.length;
console.log("The average is = " + average);


// Question: In the above task, what would happen if there were two actions of a same type?


var testObj = {

   "actions": [
       {
           "type": "home-block",
           "params": {
               "appearance": "text",
               "action": null
           }
       },

       {
           "type": "presence",
           "params": {
               "interval": 15
           }
       },

       {
          "type": "presence",
          "params": {
            "title": "text",
            "message": "text"
          }
       }
   ]

};




var testActions = testObj.actions;

var test = _.object(_.pluck(testActions, 'type'), _.pluck(testActions, 'params'));

console.log(test);

// The last action of the same type overwrites the previous. 
// _.uniq() could be used to keep the first occurence of each value 