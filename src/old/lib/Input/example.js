import React from 'react';
var EXAMPLES = {
  title : "Inputs",
  text : [<h5>Field length generally indicates expected input length. Error messages always appear below the field.</h5>],
  example : [
              {title: 'Sign In',
              content:
                [
                  {
                    name : "TextInput",
                    fnx : {
                      valueName : "password",
                      label : "Password",
                      valueType : "text",
                      key : "input3"
                    }
                  },
                  {
                    name : "TextInput",
                    fnx : {
                      valueName : "username",
                      label : "Username",
                      valueType : "text",
                      key : "input4"
                    }
                  }
                ],
                code :
`<TextInput
  valueName = 'Username'
  label = 'Username'
  valueType = 'text'
  inputChanged = {foo}
/>
`,
              properties : [
                        {
                          name : "valueName",
                          type : "string",
                          default : "",
                          description : `The valueName property's are assigned the to <input>'s properties name and id.`
                        },
                        {
                          name : "label",
                          type : "string",
                          default : "",
                          description : `The label property's content appears in or by the input.`
                        },
                        {
                          name : "valueType",
                          type : "string",
                          default : "text",
                          description : `The valueType property, when set to a data type such as 'text' or 'number' changes how the user can interact with the input.`
                        },
                        {
                          name : "active",
                          type : "boolean",
                          default : "true",
                          description : `The active property, when set to true or unassigned, enables the input; otherwise it is disabled.`
                        },
                        {
                          name : "callback",
                          type : "function",
                          default : "",
                          description : `The callback property, when set to a function, calls that function when there is activity in the input.`
                        },
                      ],
              },
              {title: 'Form',
              content:
                [
                  {
                    name : "FormInput",
                    fnx : {
                      valueName : "Label",
                      label : "Label",
                      valueType : "text",
                      active : true,
                      key : "input1"
                    }
                  },
                  {
                    name : "FormInput",
                    fnx : {
                      valueName : "Label",
                      label : "Label",
                      valueType : "text",
                      active : false,
                      key : "input2"
                    }
                  }
                ],
                code :
`<FormInput
  valueName = 'Username'
  label = 'Username'
  valueType = 'text'
  inputChanged = {foo}
/>
`,
              properties : [
                        {
                          name : "valueName",
                          type : "string",
                          default : "",
                          description : `The valueName property's are assigned the to <input>'s properties name and id.`
                        },
                        {
                          name : "label",
                          type : "string",
                          default : "",
                          description : `The label property's content appears in or by the input.`
                        },
                        {
                          name : "valueType",
                          type : "string",
                          default : "text",
                          description : `The valueType property, when set to a data type such as 'text' or 'number' changes how the user can interact with the input.`
                        },
                        {
                          name : "active",
                          type : "boolean",
                          default : "true",
                          description : `The active property, when set to true or unassigned, enables the input; otherwise it is disabled.`
                        },
                        {
                          name : "callback",
                          type : "function",
                          default : "",
                          description : `The callback property, when set to a function, calls that function when there is activity in the input.`
                        },
                      ],
              }
            ],

active: false,

}

export default EXAMPLES;
