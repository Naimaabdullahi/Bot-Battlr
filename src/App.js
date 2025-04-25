import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [yourBots, setYourBots] = useState([]);

  useEffect(() => {
    // Fetch the bot data from the server
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  // Function to handle selecting a bot
  const selectBot = (bot) => {
    if (!yourBots.find((b) => b.id === bot.id)) {
      setYourBots([...yourBots, bot]);
    }
  };

  // Function to handle releasing a bot
  const releaseBot = (bot) => {
    setYourBots(yourBots.filter((b) => b.id !== bot.id));
  };

  // Function to handle discharging a bot
  const dischargeBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setBots(bots.filter((b) => b.id !== bot.id));
        setYourBots(yourBots.filter((b) => b.id !== bot.id));
      })
      .catch((error) => console.error('Error deleting bot:', error));
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <BotCollection bots={bots} selectBot={selectBot} />
      <YourBotArmy
        bots={yourBots}
        releaseBot={releaseBot}
        dischargeBot={dischargeBot}
      />
    </div>
  );
}

export default App;
