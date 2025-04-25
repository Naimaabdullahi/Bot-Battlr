import React from 'react';

const Filter = ({ filterBotsByClass }) => {
  const classes = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

  return (
    <div>
      {classes.map((botClass) => (
        <button key={botClass} onClick={() => filterBotsByClass(botClass)}>
          {botClass}
        </button>
      ))}
    </div>
  );
};

export default Filter;
