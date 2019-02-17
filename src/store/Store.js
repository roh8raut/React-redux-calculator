import { createStore } from "redux";

const initialState = {
  current: "",
  firstOperand: "",
  secondOperand: "",
  operator: "",
  result: ""
};
const reducer = (state = initialState, action) => {
  console.log(state, action);
  if (action.type === "NUM") {
    if (state.operator === "") {
      console.log("inside if");
      return {
        ...state,
        current: state.firstOperand + action.payload,
        firstOperand: state.firstOperand + action.payload
      };
    } else {
      console.log("inside else");
      return {
        ...state,
        current: state.secondOperand + action.payload,
        secondOperand: state.secondOperand + action.payload
      };
    }
  }
  if (action.type === "CLEAR") {
    return {
      ...state,
      firstOperand: "",
      secondOperand: "",
      operator: "",
      current: ""
    };
  }

  if (action.type === "OPERATOR") {
    return {
      ...state,
      current: action.payload,
      operator: action.payload
    };
  }

  if (action.type === "EQUAL") {
    if (state.secondOperand === "" || state.firstOperand === "") {
      alert("please enter both the operands");
    } else {
      if (state.operator === "+") {
        var res = parseInt(state.firstOperand) + parseInt(state.secondOperand);
        console.log(res);
        return {
          ...state,
          firstOperand: "",
          secondOperand: "",
          operator: "",
          current: res
        };
      } else if (state.operator === "-") {
        var res = parseInt(state.firstOperand) - parseInt(state.secondOperand);
        console.log(res);
        return {
          ...state,
          firstOperand: "",
          secondOperand: "",
          operator: "",
          current: res
        };
      } else if (state.operator === "*") {
        var res = parseInt(state.firstOperand) * parseInt(state.secondOperand);
        console.log(res);
        return {
          ...state,
          firstOperand: "",
          secondOperand: "",
          operator: "",
          current: res
        };
      } else if (state.operator === "/") {
        var res = parseInt(state.firstOperand) / parseInt(state.secondOperand);
        console.log(res);
        return {
          ...state,
          firstOperand: "",
          secondOperand: "",
          operator: "",
          current: res
        };
      }
    }
  }

  return state;
};
const store = createStore(reducer);

export default store;
