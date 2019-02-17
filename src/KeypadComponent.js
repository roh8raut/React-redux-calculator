import React, { Component } from "react";
import { connect } from "react-redux";

class KeypadComponent extends Component {
  render() {
    return (
      <>
      <div className="display">
        <h3>Display:</h3>
        <input type="text" id="textbox" value={this.props.current} />
      </div>
        <div className="keys">
          <button className="btn" value="1" onClick={this.props.keypressed}>
            <b>1</b>
          </button>
          <button className="btn" value="2" onClick={this.props.keypressed}>
            <b>2</b>
          </button>
          <button className="btn" value="3" onClick={this.props.keypressed}>
            {" "}
            <b>3</b>
          </button>
          <button
            className="btn btn-info"
            value="+"
            onClick={this.props.operatorPressed}
          >
            <b>+</b>
          </button>
          <br />
          <button className="btn" value="4" onClick={this.props.keypressed}>
            <b>4</b>
          </button>
          <button className="btn" value="5" onClick={this.props.keypressed}>
            <b>5</b>
          </button>
          <button className="btn" value="6" onClick={this.props.keypressed}>
            <b>6</b>
          </button>
          <button
            className="btn btn-info"
            id="minus"
            value="-"
            onClick={this.props.operatorPressed}
          >
            <b>-</b>
          </button>
          <br />
          <button className="btn" value="7" onClick={this.props.keypressed}>
            <b>7</b>
          </button>
          <button className="btn" value="8" onClick={this.props.keypressed}>
            <b>8</b>
          </button>
          <button className="btn" value="9" onClick={this.props.keypressed}>
            <b>9</b>
          </button>
          <button
            className="btn btn-info"
            id="multiply"
            value="*"
            onClick={this.props.operatorPressed}
          >
            <b>*</b>
          </button>
          <br />
          <button
            className="btn btn-success"
            id="enter"
            value="="
            onClick={this.props.equalPressed}
          >
            <b>Enter</b>
          </button>
          <button className="btn " value="0" onClick={this.props.keypressed}>
            <b>0</b>
          </button>
          <button
            className="btn btn-info"
            id="divison"
            value="/"
            onClick={this.props.operatorPressed}>
            <b>/</b>
          </button>
          <br />
          <button
            className="btn btn-danger"
            id="clear-btn"
            value=""
            onClick={this.props.clearKeypressed}
          >
            <b>Clear</b>
          </button>
          </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log("!!!", state);
  return {
    current: state.current,
    firstOperand: state.firstOperand,
    secondOperand: state.secondOperand
  };
};

const mapDispatchToProps = dispatch => {
  return {
    keypressed: evt => {
      console.log("changing");
      console.log("@@", evt.currentTarget.value);
      const action = {
        type: "NUM",
        payload: evt.currentTarget.value
      };
      dispatch(action);
    },

    clearKeypressed: evt => {
      const action = {
        type: "CLEAR",
        payload: evt.currentTarget.value
      };
      dispatch(action);
    },

    operatorPressed: evt => {
      const action = {
        type: "OPERATOR",
        payload: evt.currentTarget.value
      };
      dispatch(action);
    },

    equalPressed: evt => {
      const action = {
        type: "EQUAL",
        payload: evt.currentTarget.value
      };
      dispatch(action);
    }

    // onChange: evt => {
    //   console.log("textbox", typeof evt.target);
    // }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KeypadComponent);
