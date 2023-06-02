import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
    const [darkToggle, setDarkToggle] = useState(false)
    const appClass = darkToggle ? "App dark" : "App light"
    function changeDarkToggle() {
      setDarkToggle(appClass => !appClass)
    }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeDarkToggle}>{darkToggle? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
