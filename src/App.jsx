import React from "react";
import BadgeForm from "./components/BadgeForm";
import BadgeList from "./components/BadgeList";
import './App.css'

function App() {
  const [savedBadges, setSavedBadges] = React.useState([]);

  return (
    <div id="app-container">
      <BadgeForm save={setSavedBadges}/>
      <BadgeList savedBadges={savedBadges}/>
    </div>
  )
}

export default App
