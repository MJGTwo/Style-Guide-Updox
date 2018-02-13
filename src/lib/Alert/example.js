import React from 'react';

let EXAMPLES = {
  title : "Alerts",
  text : [<h5>Messages communicate an alert or notification to the user. They appear below or beside text fields.</h5>],
  example : [{title: "Contextual Alerts",
              content: [
              {
                name : 'Alert',
                fnx : {
                  text : <div><h5>Attention the password that you entered is incorrect. To retrieve password <a>click here</a></h5></div>,
                  style : {height : '65px', width : '85%'}
                }
              }
            ],
            code :  `<Alert
  text = {<div>Attention the password that you entered is incorrect. To retrieve password <a>click here</a></div>}
  style = {{height : '65px', width : '85%'}}
/>

<Alert style = {{height : '65px', width : '85%'}}>
  <div>Attention the password that you entered is incorrect. To retrieve password <a>click here</a></div>
</Alert>
`,
          properties : [
              {
                "name" : "text",
                "type" : "JSX",
                "default" : "",
                "description" : "The text is the content of the alert. It must have a <div> wrapper in order to have a clickable tags, like <a>, inside it."
              },
              {
                "name" : "style",
                "type" : "JS Object",
                "default" : "default style",
                "description" : "The style prop contains inline styles that can overwrite the default styles of this component."
              },

                  ],
          }],
active: false,
}

export default EXAMPLES;
