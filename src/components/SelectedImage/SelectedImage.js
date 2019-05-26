import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../modules/mapStateToProps';

class SelectedImage extends Component {
    render() {
        const {
            imgData,
            tagsList,
        } = this.props;
        let tagsListElem = null;

        if (tagsList != null && tagsList.length > 0) {
            const tagItems = tagsList.map((tag, tagIndex) => {
                return <li key={tagIndex}>{tag.name}</li>;
            });
            tagsListElem = (
                <ul>
                    {tagItems}
                </ul>
            );
        }

        return (
            <div>
                <h3>{imgData.title}</h3>
                <div>
                    <img src={imgData.path} alt={imgData.title} />
                </div>
                {tagsListElem}
            </div>
        );
    }
}

export default connect(mapStateToProps)(SelectedImage);
