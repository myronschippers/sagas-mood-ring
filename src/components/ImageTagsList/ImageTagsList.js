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
            imageData,
        } = this.props;
        let tagItems = tags.map((tag, tagIndex) => {
            return (
                <Grid
                    item
                    key={tagIndex}
                >
                    <ImageTagItem tag={tag} tagIdx={tagIndex} imageId={imageData.id}></ImageTagItem>
                </Grid>
            );
        });

        if (tags.length === 0) {
            tagItems = (
                <Grid item>This image has not been tagged.</Grid>
            );
        }

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
