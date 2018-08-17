import React, { Component } from 'react';
import PropTypes from 'prop-types'
import GameList from './GamesList';
import { fetchGames } from '../actions';
import { connect } from 'react-redux';


const propTypes = {
    games:PropTypes.array.isRequired,
};


class Games extends Component {
    componentDidMount(){
        this.props.fetchGames();
    }
    render() {
        console.log(this.props)
        return (
            
            <div>
                <GameList games={this.props.games} />
            </div>
        );
    }
}

Games.propTypes = propTypes;

const mapStateToProps = (state) => {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps, { fetchGames })(Games)

