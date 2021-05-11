import React from "react";
import "./App.css";
import Display from "./componentD";

// Create a Context
export const NumberContext = React.createContext();
// It returns an object with 2 values:
// { Provider, Consumer }

export const ProfileContext = React.createContext();

function App() {
  // Use the Provider to make a value available to all
  // children and grandchildren
  return (
    <NumberContext.Provider value={42}>
      <ProfileContext.Provider value="this is profile">
        <Display />
      </ProfileContext.Provider>
    </NumberContext.Provider>
  );
}

export default App;

//যদি আমাদের একটা props, 1st Component থেকে 2nd Component,2nd Component থেকে 3rd Component (আরও অনেক) এ পাঠানো দরকার হয় ।
//সেক্ষেত্রে আমরা সরাসরি যেকোনো component থেকে Data receive করতে পারি useContext Hook use করে ।
//useContext Hook use করলে আমাদের নেস্টিং আকারে props পাঠানো লাগে না ।

//useCOntext hook Provider অংশে কোন হেল্প করে না ।
//useCOntext hook consumer অংশে হেল্প করে ।
