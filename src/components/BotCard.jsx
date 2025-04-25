import React from "react";

function BotCard({ bot, handleClick, handleDischarge, showDischarge }) {
  return (
    <div className="bot-card" onClick={handleClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health} | Damage: {bot.damage} | Armor: {bot.armor}</p>
      {showDischarge && (
        <button onClick={(e) => {
          e.stopPropagation();
          handleDischarge();
        }} style={{ backgroundColor: "red", color: "white" }}>
          ✖ Discharge
        </button>
      )}
    </div>
  );
}

export default BotCard;
