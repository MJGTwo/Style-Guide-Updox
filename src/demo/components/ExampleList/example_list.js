import React from 'react';

import ExampleListItem from './example_list_item.js';

// import '../index.css';

//import Alert from './examples/alert.js'


const ExampleList = (props) => {
  // The purpose of this Component is to list ExampleListItem,
  // which are generated with data stored in this Component.
  return(
    <div>
      {props.examples.map( (topic) => {
        return (

            <ExampleListItem
              topic = {topic}
              key = {`${topic.title}Entry`}
              onExampleSelect = {props.onExampleSelect}
            />

        );
      })}
    </div>
  )
}


export default ExampleList;
