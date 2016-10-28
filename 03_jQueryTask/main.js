// jQuery

$(document).ready(function () {  

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


// 1. Insert a textarea element into the DOM and fill it with the JSON structure from the first task.
// Bonus points if JSON in the textarea is nicely formatted.
// NB. JSON structure should be present in the code as a JavaScript object, not a string
 

  var textArea = $('<textarea />');
  $('#myDiv').append(textArea);


  var jsonPretty = JSON.stringify(obj, null, '\t');
  $(textArea).append(jsonPretty);







  // 2. Make an AJAX request to https://www.ipify.org/ API to retrieve your machines' public IP. 
  // Log only the IP address to the console.


  // First way
  $.ajax({url: "https://api.ipify.org?format=jsonp&callback", success: function(result){
    console.log(result);
  }});


  //Second way 
  $(function() {
    $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
      function(json) {
        console.log("My public IP address is: ", json.ip);
      }
    );
  });



});