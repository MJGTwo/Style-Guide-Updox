import React from 'react';

var EXAMPLES = {
  "title" : "Dropdown",
  "text" : [<div><h5> Used to choose an action or to set filter criteria, especially when choices don’t have a lot of explanatory text.</h5></div>],
  "example" : [
                {
                  title:'Examples',
                  content:
                    [
                      {
                        name : 'Dropdown',
                        fnx : {
                          label : 'Active Menu',
                          children : [
                            {
                              name : 'option 1',
                              value : '1'
                            },
                            {
                              name : 'option 2',
                              value : '2'
                            },
                            {
                              name : 'option 3',
                              value : '3'
                            },
                            {
                              name : 'option 4',
                              value : '4'
                            },
                            {
                              name : 'option 5',
                              value : '5'
                            },
                          ]
                        },
                        key : 'dropdownkey'
                      }
                    ],
                    "code" :
`let foo = (val) => {console.log(val)};

<Dropdown
  onSelect = {foo}
  label = "Rate your experience">
{[
  {
    name : '1 - bad',
    value : '1'
  },
  {
    name : '2',
    value : '2'
  },
  {
    name : '3 - average',
    value : '3'
  },
  {
    name : '4',
    value : '4'
  },
  {
    name : '5 - great',
    value : '5'
  },
]}
</Dropdown>

`,
                  "properties" : [{
                      "name" : "label",
                      "type" : "String",
                      "default" : "",
                      "description" : "The Label property's content appears on the Dropdown."
                    },
                    {
                      "name" : "onSelect",
                      "type" : "function",
                      "default" : "",
                      "description" : "The onSelect property, when set to a function, passes that function the value selected."
                    },
                    {
                      "name" : "children",
                      "type" : "JS Object Array",
                      "default" : "",
                      "description" : "The children property, contains the option name and values for the dropdown to use."
                    },
                  ],
                  }
                ],



"active": "false",

}

export default EXAMPLES
