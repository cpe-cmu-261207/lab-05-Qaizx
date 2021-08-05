import React from "react";
import { useState } from "react";
import Header from "./component/Header";
import TaskInput from "./component/TaskInput";
import Todo from "./component/Todo";
import Footer from "./component/Footer";


function App() {
  return (
    <div>
      {/* header section */}
      <Header></Header>

      {/* todo section */}
      <TaskInput></TaskInput>

      {/* footer section */}
      <Footer></Footer>
    </div>
  );
}

export default App;