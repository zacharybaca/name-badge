import React from "react";
import BadgeForm from "./components/BadgeForm";
import BadgeList from "./components/BadgeList";
import './App.css'

function App() {
  const [savedBadges, setSavedBadges] = React.useState([]);

  return (
    <div id="app-container">
      <h1>Create Your Own Name Badge</h1>
      <BadgeForm save={setSavedBadges}/>
      <h2>Saved Name Badges</h2>
      <hr />
      <BadgeList savedBadges={savedBadges}/>
    </div>
  )
}

export default App
