import React from 'react';


var EXAMPLES = {
  "title" : "Buttons",
  "text" : [<div><h5>Buttons contain calls-to-action and the primary button will be always uppercase. Secondary Buttons (used for canceling or less important options) are lowercase.</h5></div>],
  "example" : [
    {
      title: "Examples",
      content: [
        {
          "name" : "Button",
          "fnx" : {
            label : "Primary",
            disabled : false,
            key : "btn1",
            type : "primary"
          }
        },
        {
          "name" : "Button",
          "fnx" : {
            label : "Primary",
            disabled : true,
            key : "btn2",
            type : "primary"
          }
        },
        {
          "name" : "Button",
          "fnx" : {
            label : "Secondary",
            disabled : false,
            key : "btn3",
            type : "secondary"
          }
        },
        {
          "name" : "Button",
          "fnx" : {
            label : "Secondary",
            disabled : true,
            key : "btn4",
            type : "secondary"
          }
        },
        {
          "name" : "HLink",
          "fnx" : {
            label : "Link",
            disabled : false,
            key : "btn5",
            type : "link",
            link : '',
            fontsize : '16pt'
          }
        }
      ],
      "code" :
`<Button
  label = 'Primary'
  disabled = {false}
  type = 'primary'
  callback = {foo}
/>
<HLink
  label = 'Primary'
  disabled = {false}
  callback = {foo}
  link : '',
  fontsize : '24pt'

</HLink>
    `,
    "properties" : [{
        "name" : "label",
        "type" : "String",
        "default" : "",
        "description" : "The Label property's content appears on the button."
      },
      {
        "name" : "disabled",
        "type" : "Boolean",
        "default" : "false",
        "description" : "The Disabled property, when set to true, prevents the user from clicking on the button."
      },
      {
        "name" : "type (<Button/> only)",
        "type" : "string",
        "default" : "primary",
        "description" : "The type property, when set to 'primary', 'secondary', or 'link', changes the coloring to reflect a primary button, secondary button, or a link."
      },
      {
        "name" : "callback",
        "type" : "function",
        "default" : "",
        "description" : "The Callback property, when set to a function, calls that function when the button is clicked."
      },
      {
        "name" : "link (<HLink/> only)",
        "type" : "string",
        "default" : "",
        "description" : "The link property, when set to a url extension such as '/about' will append it to the url."
      },
      {
        "name" : "fontsize (<HLink/> only)",
        "type" : "string",
        "default" : "24pt",
        "description" : "The fontsize property, when set to a string ending with 'px' or 'pt', will adjust the size of the link."
      },
    ],
    },
    {
      title: "Horizontal Group Buttons",
      content: [
        {
          "name" : "HGButton",
          "fnx" : {
            children : [{label: 'Example 1', value : '1'},{label: 'Example 2', value : '2'},{label: 'Example 3', value : '3'}],
            disabled : false,
            key : "btn1",
          }
        }
      ],
      "code" :
`<HGButton disabled = {false}>
{[{label: 'Example1', value : '1'},{label: 'Example2', value : '2'},{label: 'Example3', value : '3'}]}
</HGButton>

    `,
    "properties" : [{
        "name" : "children",
        "type" : "array of JS objects",
        "default" : "",
        "description" : "The children property's content create the internal buttons. They must have the keys 'label' and 'value'."
      },
    ],
    },
  ],
"active": "false",
}

export default EXAMPLES
