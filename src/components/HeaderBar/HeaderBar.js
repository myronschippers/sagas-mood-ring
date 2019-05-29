import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../modules/mapStateToProps';
import { withRouter } from 'react-router-dom';

// MATERIAL-UI components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// MATERIAL-UI icons
import MenuIcon from '@material-ui/icons/Menu';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import BarChartIcon from '@material-ui/icons/BarChart';

class HeaderBar extends Component {
    state = {
        navAnchorRef: null,
        isNavOpen: false,
    }

    toggleNavMenu = (event) => {
        this.setState({
            navAnchorRef: event.currentTarget,
            isNavOpen: !this.state.isNavOpen,
        });
    }

    navigateTo = (path) => {
        return (event) => {
            console.log('navigateTo - path: ', path);
            event.preventDefault();
            this.props.history.push(path);
            this.closeNavMenu();
        };
    }

    closeNavMenu = (event) => {
        console.log('closeNavMenu');
        this.setState({
            isNavOpen: false,
        })
    }

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="Menu"
                            onClick={this.toggleNavMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Popper
                            open={this.state.isNavOpen}
                            anchorEl={this.state.navAnchorRef}
                            placement="bottom-start"
                            transition
                        >
                        {({ TransitionProps }) => (
                            <ClickAwayListener  onClickAway={this.closeNavMenu}>
                            <Paper>
                                <List component="nav">
                                    <ListItem
                                        button
                                        onClick={this.navigateTo('/')}
                                    >
                                        <ListItemIcon>
                                            <InsertPhotoIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Home"
                                        />
                                    </ListItem>

                                    <ListItem
                                        button
                                        onClick={this.navigateTo('/stats')}
                                    >
                                        <ListItemIcon>
                                            <BarChartIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Stats"
                                        />
                                    </ListItem>
                                </List>
                            </Paper>
                            </ClickAwayListener>
                        )}
                        </Popper>

                        <Typography variant="h6">
                            {this.props.primaryHdg}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(HeaderBar));
