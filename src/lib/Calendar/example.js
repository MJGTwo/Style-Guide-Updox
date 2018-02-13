import React from 'react';

var EXAMPLES = {
  "title" : "Date Picker",
  "text" : [<h5>The calendar opens on a click and closes when the user selects a date or clicks anywhere else on the page. When the user selects a start date, the calendar automatically shifts the end date.</h5>],
  "example" : [
                {
                  title: 'Examples',
                  content:
                    [
                      {
                        name : 'Calendar',
                        fnx : {
                          key : 'cal1'
                        }
                      }
                    ],
                    "code" :
`let foo = (a,b) => {console.log(a,b)}

<Calendar
  callback = {foo}
/>
                  `,
                  "properties" : [{
                      "name" : "start",
                      "type" : "Date",
                      "default" : "new Date()",
                      "description" : "This prop tells the Date picker the earliest date the user can pick. The default value is today."
                    },
                    {
                      "name" : "end",
                      "type" : "Date",
                      "default" : "let temp = new Date(); temp.setFullYear(temp.getFullYear()+1);",
                      "description" : "This prop tells the Date picker the earliest date the user can pick. The default value is today plus one year."
                    },
                    {
                      "name" : "callback",
                      "type" : "function",
                      "default" : "(x) => {x}",
                      "description" : "The Callback property, when set to a function, calls that function when the submit button is pressed. The function must take two arguments, which are the dates selected by the user."
                    },
                  ],
                }
              ],



"active": "false",
}

export default EXAMPLES
