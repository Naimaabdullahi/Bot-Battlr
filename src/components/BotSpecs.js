import React from 'react';

const BotSpecs = ({ bot, goBack, enlistBot }) => {
  return (
    <div>
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <button onClick={goBack}>Back to Bot Collection</button>
      <button onClick={() => enlistBot(bot)}>Enlist Bot</button>
    </div>
  );
};

export default BotSpecs;
