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

        return (
            <Grid
                container
                justify="center"
                spacing={8}
            >
                <Grid item xs={12} sm={3}>

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
