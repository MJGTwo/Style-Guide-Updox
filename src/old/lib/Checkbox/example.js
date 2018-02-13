import React from 'react';

let EXAMPLES = {
  title : "Checkbox",
  text : [<h5>Use for a list where the user can select more than one option. Checkboxes are always arranged vertically.</h5>],
  example : [
    {
      title:'Examples',
      content :
      [
        {
          name : "Checkbox",
          fnx : {
            label : "Checkbox",
            key : 'check1',
            disabled : false,
          }
        },
        {
          name : "Checkbox",
          fnx : {
            label : "Agree",
            key : 'check2',
            disabled : false,
            checked : true,
          }
        },
        {
          name : "Checkbox",
          fnx : {
            label : "Checkbox",
            key : 'check3',
            disabled : true,
          }
        },
        {
          name : "Checkbox",
          fnx : {
            label : "unavailable",
            key : 'check4',
            disabled : true,
            checked : true,
          }
        }
      ],
      code :
`<Checkbox
  disabled = {false}
  label = "Agree"
  checked = {false}
  callback = {foo}
/>
`,
    properties : [{
        "name" : "label",
        "type" : "String",
        "default" : "",
        "description" : "The Label property's content appears to the right side of the checkbox."
      },
      {
        "name" : "disabled",
        "type" : "Boolean",
        "default" : "false",
        "description" : "The Disabled property, when set to true, prevents the user from clicking on the checkbox."
      },
      {
        "name" : "checked",
        "type" : "Boolean",
        "default" : "false",
        "description" : "The checked property, when set to true, creates the checkbox already checked."
      },
      {
        "name" : "callback",
        "type" : "function",
        "default" : "",
        "description" : "The Callback property, when set to a function, calls that function when the button is clicked."
      },
    ],

    }
  ],

active: false,

}

export default EXAMPLES
