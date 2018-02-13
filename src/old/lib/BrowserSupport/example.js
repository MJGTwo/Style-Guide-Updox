import React from 'react';
import BrowserSupport from './';

var EXAMPLES = {
  "title" : "Browser Support",
  "text" : [<div><h5>The below browsers and versions are supported in the Patient Portal. We always support 2 versions from the most current.</h5><BrowserSupport/></div>],
  "example" : [],

  "code" :
`let foo = (a,b) => {console.log(a,b)}

<Calendar
  callback = {foo}
/>
`,

"active": "false",
"props" : [{
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

export default EXAMPLES
