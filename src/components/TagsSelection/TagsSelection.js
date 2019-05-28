import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../modules/mapStateToProps';

// material-ui components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// material-ui icons
import AddCircle from '@material-ui/icons/AddCircle';

class TagsSelection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isMenuOpen: false,
            anchorRef: null,
        }
        // this.anchorRef = React.createRef();
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_TAGS',
        });
    }

    addTagToImage = (tagIdx) => {
        return (event) => {
            const tagId = this.props.reduxState.tags[tagIdx].id;
    
            this.props.dispatch({
                type: 'POST_TAG_TO_IMAGE',
                payload: {
                    imageId: this.props.imageId,
                    tagId,
                }
            });
            this.closeMenu();
        }
    }

    toggleMenu = (event) => {
        this.setState({
            isMenuOpen: !this.state.isMenuOpen,
            anchorRef: event.currentTarget,
        })
    }

    closeMenu = (event) => {
        this.setState({
            isMenuOpen: false,
        })
    }

    render() {
        const tagsListElem = this.props.reduxState.tags.map((tagData, tagIndex) => {
            return (
                <ListItem
                    button
                    key={tagIndex}
                    data-idx={tagIndex}
                    onClick={this.addTagToImage(tagIndex)}
                >
                    <ListItemIcon>
                        <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                        primary={tagData.name}
                    />
                </ListItem>
            );
        });

        return (
            <div>

                <Button
                    variant="contained"
                    color="primary"
                    aria-label="Add"
                    aria-haspopup="true"
                    component="button"
                    onClick={this.toggleMenu}
                >
                    Add Tag&nbsp;&nbsp;<AddCircle />
                </Button>
                <Popper
                    open={this.state.isMenuOpen}
                    anchorEl={this.state.anchorRef}
                    placement="top-end"
                    transition
                >
                {({ TransitionProps }) => (
                    <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: 'center top' }}
                    >
                        <ClickAwayListener  onClickAway={this.closeMenu}>
                        <Paper>
                            <List component="ul">
                                {tagsListElem}
                            </List>
                        </Paper>
                        </ClickAwayListener>
                    </Grow>
                )}
                </Popper>

            </div>
        );
    }
}

export default connect(mapStateToProps)(TagsSelection);
