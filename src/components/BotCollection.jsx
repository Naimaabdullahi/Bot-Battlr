import React from 'react';

const BotCollection = ({ bots, selectBot }) => {
  return (
    <div>
      <h2>Bot Collection</h2>
      {bots.length > 0 ? (
        bots.map((bot) => (
          <div key={bot.id} onClick={() => selectBot(bot)}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Class: {bot.bot_class}</p>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Catchphrase: {bot.catchphrase}</p>
          </div>
        ))
      ) : (
        <p>No bots available</p>
      )}
    </div>
  );
};

export default BotCollection;
