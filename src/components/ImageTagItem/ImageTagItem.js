import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../modules/mapStateToProps';

// material-ui components
import Chip from '@material-ui/core/Chip';

class ImageTagItem extends Component {
    handleDeleteTag = (event) => {
        const tagIdx = event.target.dataset.idx;
    }

    removeTagFromImage(tagIndex) {
        const tagId = this.props.imgData.tags[tagIndex].id;
        console.log('removeTagFromImage');
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
