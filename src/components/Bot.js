import React from "react";

function Bot({ bot, enlistBot }) {
  return (
    <div>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={() => enlistBot(bot)}>Enlist</button>
    </div>
  );
}

export default Bot;
