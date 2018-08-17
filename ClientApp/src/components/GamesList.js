import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    games: PropTypes.array.isRequired,
};


const GameList = ({ games }) => {
    const emptyMsg = "no games";
    const gamesMsg = "games";
    return (
        <div>
            {
                games.length === 0 ? emptyMsg : gamesMsg
            }
        </div>
    );
};

GameList.propTypes = propTypes;

export default GameList;
