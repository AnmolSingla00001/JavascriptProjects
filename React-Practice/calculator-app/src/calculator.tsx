import { Component } from "react";
export class Calculate extends Component {
  state = {
    operator1 = 0,
    operator2 = 0,
    operand = "",
  };
  // constructor(operand1 : number, operand2 : number, operator : string){
  //     if(operator == 'Add'){

  //     this.result = operand1 + operand2;
  // }
  render() {
    return (
      <>
        <input type="text" name="op1" />
        <input type="text" name="op2" />
        <input type="text" name="opr" />
        <h4>Result is - </h4>
      </>
    );
  }
}
