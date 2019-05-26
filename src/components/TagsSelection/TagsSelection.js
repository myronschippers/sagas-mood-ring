import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../modules/mapStateToProps';

class TagsSelection extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_TAGS',
        });
    }

    addTagToImage = (event) => {
        const tagIdx = event.target.dataset.idx;
        const tagId = this.props.reduxState.tags[tagIdx].id;

        this.props.dispatch({
            type: 'POST_TAG_TO_IMAGE',
            payload: {
                imageId: this.props.imageId,
                tagId,
            }
        })
    }

    render() {
        const {
            imageId,
            currTags,
        } = this.props;
        let tagsListElem = this.props.reduxState.tags.map((tagData, tagIndex) => {
            return (
                <li key={tagIndex}>
                    <button
                        data-idx={tagIndex}
                        onClick={this.addTagToImage}
                    >
                        {tagData.name} (+)
                    </button>
                </li>
            );
        });

        return (
            <div>
                <ul>
                    {tagsListElem}
                </ul>
            </div>
        );
    }
}

export default connect(mapStateToProps)(TagsSelection);
