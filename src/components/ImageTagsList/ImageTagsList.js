import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../modules/mapStateToProps';

// material-ui components
import Grid from '@material-ui/core/Grid';

// components
import ImageTagItem from '../ImageTagItem/ImageTagItem';

class ImageTagsList extends Component {
    render() {
        const {
            tags,
        } = this.props;
        const tagItems = tags.map((tag, tagIndex) => {
            return (
                <Grid
                    item
                    key={tagIndex}
                >
                    <ImageTagItem tag={tag} tagIdx={tagIndex}></ImageTagItem>
                </Grid>
            );
        });

        return (
            <Grid
                container
                justify="center"
                alignItems="center"
                spacing={8}
            >
                {tagItems}
            </Grid>
        );
    }
}

export default connect(mapStateToProps)(ImageTagsList);
