import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const res =  axios.get("http://localhost:3000/showBooks");
  console.log(res);
  return <>
  

  </>;
}

export default App;
