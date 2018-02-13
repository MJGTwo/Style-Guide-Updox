import React,{Component} from 'react';
import DatePicker from 'material-ui/DatePicker';

import s from './calendar.css';
import cx from 'classnames';


export default class Calendar extends Component {

  constructor(props){
    super(props)
    let maxDate;
    const today = props.start === undefined ? new Date() : props.start;
    if (props.end === undefined){
      maxDate = new Date();
      maxDate.setFullYear(today.getFullYear()+1);
      maxDate.setHours(0,0,0,0);
    }
    else{
      maxDate = props.end;
    }


    this.state = {
      today : today,
      startDate : null,
      endDate : null,
      maxDate : maxDate,
      callback : props.callback === undefined ? (a,b)=>{} : props.callback,
    }
    this.datePickerTextFieldStyle = {
      width: '100%',
      height: '62px',
      fontSize : "20pt",
      fontFamily: "Quicksand",
      fontWeight: "500",
      fontColor: "#ababab", // Don't know how to get this to work.
      padding: "0 0px 18px 17px",
    };

  }


  handleChangeStartDate = (event,date) => {
    this.setState({
      startDate : date,
    });
  };

  handleChangeEndDate = (event,date) => {
    this.setState({
      endDate : date,
    });
  };

  handleSubmit = () => {
    if (
      (this.state.startDate !== null && this.state.endDate !== null)
      && (this.state.startDate < this.state.endDate)
    ){
      this.state.callback(this.state.startDate,this.state.endDate)
    }
  }

  endDateHelper = () =>{
    if (this.state.startDate === null){
      return (<div className={cx(s.date)}/>)
    }
    else {
      return(
        <div className={cx(s.date)}>
          <DatePicker
            name ="ender"
            defaultDate={this.state.startDate}
            container="inline"
            autoOk={false}
            minDate = {this.state.startDate}
            maxDate = {this.state.maxDate}
            textFieldStyle = {this.datePickerTextFieldStyle}
            style = {this.datePickerStyle}
            onChange = {this.handleChangeEndDate}
            containerStyle = {{padding : '0', margin : '0'}}
          />
        </div>
      )

    }
  }

  render(){

    return(
      <div className={cx(s.container)}>
        <div className={cx(s.label)}>
          <h4>Filter Opt.</h4>
        </div>
        <div className={cx(s.date)}>
          <DatePicker
            name = "starter"
            defaultDate={this.state.today}
            container="inline"
            autoOk={false}
            minDate = {this.state.today}
            onChange = {this.handleChangeStartDate}
            textFieldStyle = {this.datePickerTextFieldStyle}
            style = {this.datePickerStyle}
          />
        </div>
        {this.endDateHelper()}
        <button
          className={cx(s.submit)}
          onClick = {this.handleSubmit}
        >
          <h4>Submit</h4>
        </button>

      </div>
    )
  }


}
