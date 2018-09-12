// Code DigitalClicker Component Here
import React from "React";

export default class DigitalClicker extends React.Component{
  constructor(){
    super()
    this.state={
      timesClicked:0
    }
  }
  incClick=()=>{
    this.setState({
      timesClicked:this.state.timesClicked+1
    })
  }
  render(){
    return
  }
}