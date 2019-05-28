import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../modules/mapStateToProps';

// material-ui components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Popper from '@material-ui/core/Popper';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
// material-ui icons
import AddCircle from '@material-ui/icons/AddCircle';

class TagsSelection extends Component {
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
        }
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
        const sampleList = (
            <Paper id="menu-list-grow">
                <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </MenuList>
                </ClickAwayListener>
            </Paper>
        );

        return (
            <Grid
                container
                justify="center"
                spacing={8}
            >
                <Grid item xs={12} sm={3}>

                <Button
                    ref={anchorRef}
                    aria-owns={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                    Toggle Menu Grow
                </Button>
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    transition
                    disablePortal
                >
                {({ TransitionProps, placement }) => (
                    <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper>
                            <List component="ul">
                                {tagsListElem}
                            </List>
                        </Paper>
                    </Grow>
                )}
                </Popper>

                    <Paper>
                        <List component="ul">
                            {tagsListElem}
                        </List>
                    </Paper>

                </Grid>
            </Grid>
        );
    }
}

export default connect(mapStateToProps)(TagsSelection);
