import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { updoxLight } from './codeStyle';
import {Card} from 'material-ui/Card/';
// react-syntax-highlighter found here:
// https://github.com/conorhastings/react-syntax-highlighter


const CodeSnippet = ({code}) => {
// A small Component function for managing the code snippets
  if (code){
    return (
      <Card style = {{boxShadow : "none"}} >
        <SyntaxHighlighter
          language='javascript'
          style = {updoxLight}
          showLineNumbers = {true}>
          {code}
        </SyntaxHighlighter>
      </Card>

    )
  }
  else {
    return(<div/>)
  }


}

export default CodeSnippet;
