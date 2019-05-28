import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../modules/mapStateToProps';

// material-ui components
import Chip from '@material-ui/core/Chip';

class ImageTagItem extends Component {
    handleDeleteTag = (event) => {
        const tagId = this.props.tag.id;
        const imageId = this.props.imageId;
        this.props.dispatch({
            type: 'DELETE_TAG_FROM_IMAGE',
            payload: {
                imageId,
                tagId,
            },
        })
    }

    render() {
        return (
            <Chip
                data-idx={this.props.tagIdx}
                label={this.props.tag.name}
                onDelete={this.handleDeleteTag}
            />
        );
    }
}

export default connect(mapStateToProps)(ImageTagItem);
