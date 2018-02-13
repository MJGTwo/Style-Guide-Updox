import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Card, CardText} from 'material-ui/Card';
import cx from 'classnames';
// import logo from '../logo.svg';
import CodeSnippet from './code_snippet.js';
//import Alert from './examples/alert.js';
// Importing from App.css because I want to keep style consistant
// in the *style* guide.
// import '../index.css';

import s from './table.css';
import props_icon from './props_icon.svg';
import code_icon from './code_icon.svg';
import Factory from './factory';

injectTapEventPlugin();

class ExampleCard extends React.Component{
  constructor(props){
    super(props);
    // console.log("init!",props);
    const {content,code,properties,title} = {...props};
    this.state = {
      codeCollapsed : true,
      propertiesCollapsed : true,
      content,
      code,
      properties,
      title,
    }
  }
  handleCodeExpand = () => {
    this.setState({codeCollapsed: !this.state.codeCollapsed});

  }

  handlePropertiesExpand = () => {
    this.setState({propertiesCollapsed: !this.state.propertiesCollapsed});
  }

  renderExample = () => {
    // console.log("HELLO THERE",this.state.content)
    return (
      <div>
        {this.state.content.map((ex)=>{
          return(
              <Factory key = {`fact${ex.fnx.key}`} name = {ex.name} fnx = {ex.fnx}/>
          )
        })}
      </div>

    )

  }

  render(){

        const buttonStyle = {
          float:'right',
          backgroundColor : 'white',
          border: "1px solid #efefef",
          padding : '0px',
          color: "#49998f",
          height : "50px",
          width : "60px",
        };
    return (
      <Card style = {{boxShadow : "none"}} containerStyle = {{border : "1px solid #dedede", minWidth : "1052px"}}>
        <button  style= {buttonStyle} onClick={this.handleCodeExpand} >
          <img src = {code_icon} alt ="Toggle code"/>
        </button>
        <button style={buttonStyle} onClick={this.handlePropertiesExpand} >
          <img src = {props_icon} alt = "Toggle properties"/>
        </button>
        <CardText >

          {this.renderExample(this.state.exampleBox)}

        </CardText>
        <CardText expandable = {this.state.codeCollapsed}>
          <CodeSnippet code={this.state.code}/>
        </CardText>
        <CardText expandable = {this.state.propertiesCollapsed}>
          <table className = {s.table}>
            <tbody>
              <tr className = {cx(s.table,s.tr)} key = {`${this.state.title}head`}>
                <th className = {cx(s.table,s.tr,s.th)}>Name</th>
                <th className = {cx(s.table,s.tr,s.th)}>Type</th>
                <th className = {cx(s.table,s.tr,s.th)}>Default</th>
                <th className = {cx(s.table,s.tr,s.th)}>Description</th>
              </tr>
              {this.state.properties.map((prop) =>{
                return (
                  <tr className = {cx(s.table,s.tr)} key = {`${this.state.title}${prop.name}`}>
                    <td className = {cx(s.table,s.tr,s.td)}>{prop.name}</td>
                    <td className = {cx(s.table,s.tr,s.td)}>{prop.type}</td>
                    <td className = {cx(s.table,s.tr,s.td)}>{prop.default}</td>
                    <td className = {cx(s.table,s.tr,s.td)}>{prop.description}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>


        </CardText>

      </Card>
    )
  }
}



class ExampleListItem extends React.Component{
  // Purpose of this Component is to be a Component that contains
  // the name, definition, example, and code of a Component that Updox
  // uses in their products. With Redux, we can sub in the info so this becomes
  // multi-use.
      //Light usage of Bootstrap to keep things pretty while developing


  //props.onExampleSelect;
  //let node = this.getDOMNode();
  constructor(props){
    super(props);
    this.props = props;
  }

  componentDidMount() {
    window.addEventListener('scroll',this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll',this.handleScroll);
  }

  handleScroll = () => {
      let node = this.refs.example;
      let position = (Math.floor(node.getBoundingClientRect().top));
      if ( position > 0 && position < window.innerHeight/20 && !this.props.topic.active){
        const name = this.nameHelper(this.props.topic.title);
        this.props.onExampleSelect(name);
      }
  }

  nameHelper = (name) => {return name === "Updox Portal Style Guide" ? "Introduction" : name}

  renderExampleBoxes = () => {
    // console.log("renderExampleBoxes",this.props.topic.example)
    return (this.props.topic.example.map((exampleBox) => {
      if (exampleBox.content.length !== 0){
        // {console.log(exampleBox)}
        return(
          <div style = {{margin: "20px 0px"}} key = {exampleBox.title}>
            <h5>{exampleBox.title}</h5>
            {this.makeCard(exampleBox)}
          </div>
        )

      }
      else {
      return  <div/>
      }
    }))
  }

  makeCard = (exampleBox) => {
    if (exampleBox.content.length === 0){
      return (<div></div>)
    }
    else{
      // console.log("Makecard()",exampleBox);
      return (
        <ExampleCard {...exampleBox}/>
      )
    }
  }


  render(){
    const itemStyle = {width : '1050px'};
    const header2Style = {padding : '20px 0 0 0'};

    return (  <div
      className = "example-item col-sm-9"
      style = {itemStyle}
      id = {this.props.topic.title === 'Updox Portal Style Guide' ? "Introduction" : this.props.topic.title }
      ref="example"
      >

        <div className = "example-item-title text-left">
          <h2 style = {header2Style}>{this.props.topic.title}</h2>
        </div>
        <div className = "item-text">
          {this.props.topic.text.map((t)=>{
            return(
              <div key={t}> {t} </div>
            );
          })}
        </div>

        { this.renderExampleBoxes()}



      </div>)
  }

}


export default ExampleListItem;
