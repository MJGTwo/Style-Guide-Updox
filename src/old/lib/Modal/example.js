import React from 'react';
var EXAMPLES = {
  "title" : "Modal",
  "text" : [<h5>Only use a modal when asking a user to choose from existing information.</h5>],
  "example" : [
                {
                  title : 'Standard Modal',
                  content:[
                  {
                    name : 'StandardModal',
                    fnx : {
                      label : 'Small dialog',
                      size : 'small',
                      key : '1',
                    }
                  },
                  {
                    name : 'StandardModal',
                    fnx : {
                      label : 'Medium Dialog',
                      size : 'medium',
                      key : '2'
                    }
                  },
                  {
                    name : 'StandardModal',
                    fnx : {
                      label : 'Large Dialog',
                      size : 'large',
                      key : '3'
                    }
                  }
                ],
                "code" :
`<StandardModal
  onSubmit = (foo)
  size = "large"
  label = "submit"
  title = "Confirm Submit"
  content = "By pressing 'ok' you are agreeing to submitting this information."
/>
`,
              "properties" : [{
                  "name" : "label",
                  "type" : "String",
                  "default" : "modal",
                  "description" : "The Label property's content appears on the button."
                },
                {
                  "name" : "size",
                  "type" : "string",
                  "default" : "small",
                  "description" : "The size property controls how large the modal will be. The options are small, medium, and large."
                },
                {
                  "name" : "onSubmit",
                  "type" : "function",
                  "default" : "",
                  "description" : "The onSubmit property, when set to a function, calls that function when the 'ok' or 'submit' button is clicked."
                },
                {
                  "name" : "title",
                  "type" : "string",
                  "default" : "Dialog Modal Title",
                  "description" : "The title property, when set to a string, will appear inside the modal window."
                },
                {
                  "name" : "content",
                  "type" : "string",
                  "default" : "Content of the modal dialog.",
                  "description" : "The content property, when set to a string, will appear inside the modal window."
                },
              ],
              },
              {
                title : 'Options Modal',
                content : [
                  {
                    name : 'OptionsModal',
                    fnx : {
                      label : 'Small Dialog',
                      size : 'small',
                      key : '4'
                    }
                  },
                  {
                    name : 'OptionsModal',
                    fnx : {
                      label : 'Medium Dialog',
                      size : 'medium',
                      key : '5'
                    }
                  },
                  {
                    name : 'OptionsModal',
                    fnx : {
                      label : 'Large Dialog',
                      size : 'large',
                      key : '6'
                    }
                  },
                ],
                "code" :
`<OptionsModal
  onSubmit = (foo)
  size = "large"
  label = "submit"
  title = "Confirm Submit"
  content = "By pressing 'ok' you are agreeing to submitting this information."
/>
`,
              "properties" : [{
                  "name" : "label",
                  "type" : "String",
                  "default" : "modal",
                  "description" : "The Label property's content appears on the button."
                },
                {
                  "name" : "size",
                  "type" : "string",
                  "default" : "small",
                  "description" : "The size property controls how large the modal will be. The options are small, medium, and large."
                },
                {
                  "name" : "onSubmit",
                  "type" : "function",
                  "default" : "",
                  "description" : "The onSubmit property, when set to a function, calls that function when the 'ok' or 'submit' button is clicked."
                },
                {
                  "name" : "onCancel",
                  "type" : "function",
                  "default" : "",
                  "description" : "The onSubmit property, when set to a function, calls that function when the 'cancel' button is clicked."
                },
                {
                  "name" : "title",
                  "type" : "string",
                  "default" : "Dialog Modal Title",
                  "description" : "The title property, when set to a string, will appear inside the modal window."
                },
                {
                  "name" : "content",
                  "type" : "string",
                  "default" : "Content of the modal dialog.",
                  "description" : "The content property, when set to a string, will appear inside the modal window."
                },
              ],
              }],



"active": "false",

}

export default EXAMPLES
