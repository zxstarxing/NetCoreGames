import React ,{Component} from 'react';
import { ButtonGroup, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class HeadMenu extends Component {
    render() {
        return (
            <ButtonGroup justified>
                <LinkContainer to="/">
                    <Button>Home</Button>
                </LinkContainer>
                <LinkContainer to="/games">
                    <Button>Games</Button>
                </LinkContainer>
                <LinkContainer to="/games/new">
                    <Button>Add New Game</Button>
                </LinkContainer>
            </ButtonGroup>
        );
    }
}

export default HeadMenu;
