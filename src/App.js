import React, { Component } from "react";
import { createStore } from "redux";
import "./App.css";

class App extends Component {
  render() {
    //A reducer function must have two parameters
    //State,Action
    const reducer = (state = {}, action) => {
      if (action.type === "A") {
        return {
          A: "I am A",
        };
      }

      if (action.type === "B") {
        return {
          ...state,
          B: "I am B",
        };
      }

      return state;
    };
    const store = createStore(reducer);
    store.subscribe(() => {
      console.log(store.getState());
    });
    store.subscribe(()=>{
      console.log(store.getState().B);
    })
    store.dispatch({ type: "A" });
    store.dispatch({ type: "something" });
    store.dispatch({ type: "B" });
    store.dispatch({ type: "something" });
    return <div>hello sd</div>;
  }
}

export default App;

//Store (observable object) => অ্যাপ্লিকেশনের সকল state/data  ধরে রাখে । একটা অ্যাপ্লিকেশনে একটাই store থাকে ।
//Reducer (pure function--রিটার্ন করে একটা object) =>  একটা function  যা নির্দিষ্ট state/data রিটার্ন করে ।
//Action => (event যে ঘটায়-- {type:'Somethis', payload:''}) একটা নির্দিষ্ট action  ঘটলে নির্দিষ্ট  একটা  Reducer নির্দিষ্ট state/data রিটার্ন করে ।
//Dispatch =>(event) যখন একটা action ঘটবে তখন নির্দিষ্ট পরিমাণ ডাটা create/delete/update হবে । এবং action ঘটার সাথে সাথে store, dispatch হবে । সহজে বললে store update হবে ।
//Subsciber => store udate হওয়ার সাথে সাথে child component/Subsciber, update হবে ।

//Todo
//1. Create a Reducer
//2. Create Store with the help of reducer
//3. Now we can subscribe
//4. dispatch(action)
