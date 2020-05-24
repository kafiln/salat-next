import React, { useContext } from "react";
import { AppContext } from "../src/context/AppContext";

function Home() {
  const state = useContext(AppContext);
  console.log(state);
  return <div>Home works</div>;
}

export default Home;
