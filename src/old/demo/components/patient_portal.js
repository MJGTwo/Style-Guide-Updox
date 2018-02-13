import React, {Component} from 'react';
import { Flex, Box } from 'reflexbox';

import ExampleList from './ExampleList/example_list.js';
import SecondaryMenu from './SecondaryMenu/secondary_menu.js';


import {default as Examples} from '../../lib/examples.js'


export default class PatientPortal extends Component{
  constructor(props){
    super(props)
    this.state = {
      examples : Examples,
      currentActive : "Introduction"
    }
  }

  selectExample = (selectedExample) => {
    let examples = this.state.examples;
    let currentActive = this.state.currentActive;
    examples = examples.map((example) => {
      if (example.title === selectedExample){
        currentActive = example.title;
      }
      const name = this.nameHelper(selectedExample);
      example.active = (example.title === name)
      return example;
    });
    this.setState({examples,currentActive});
  }

  nameHelper = (name) => {return name === "Introduction" ? "Updox Portal Style Guide" : name}

  render(){
    return(
      <Flex>
        <Box px={3} w={1/5}>
          <SecondaryMenu
            className = "secondary-menu"
            examples = {this.state.examples}
            onExampleSelect = {selectedExample => this.selectExample(selectedExample)}
            currentActive = {this.state.currentActive}
            />

        </Box>
        <Box px={3} w={4/5}>
            <ExampleList
              examples = {this.state.examples}
              onExampleSelect = {selectedExample => this.selectExample(selectedExample)}
            />

        </Box>
     </Flex>
    )
  }
}
