import React, {Component} from 'react';
import cx from 'classnames';


import s from './secondary_menu.css';

export default class SecondaryMenu extends Component {

  constructor(props){
    super(props);
    this.props = props;
    this.topics = props.examples;


  }

  onLinkClick = (active) => {
    this.props.onExampleSelect(active);
  }

  renderSecondaryLinks = () =>{
    const introCheck = (name) => {return name === "Updox Portal Style Guide" ? "Introduction" : name}
    const activeStyle = (name) => {return name === this.props.currentActive ? s.active : ""}

    return this.topics.map((topic) => {
      const name = introCheck(topic.title)
      return (<div className = {cx(s.secondaryLink,activeStyle(name))} key = {topic.title} onClick = {() => this.onLinkClick(name) }>
        <a href={"#"+name} style ={{color: 'inherit'}}>
          {name}
        </a>
      </div>)
    })
  }

  render() {
    return(
      <div className = {s.secondaryMenu}>
        { this.renderSecondaryLinks()}
      </div>
    )
  }
}
