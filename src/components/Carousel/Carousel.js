import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../modules/mapStateToProps';
import SelectedImage from '../SelectedImage/SelectedImage';

class Carousel extends Component {
    state = {
        currentImage: 0,
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_IMAGES',
        })
    }

    render() {
        let imageElement = null;
        const imgData = this.props.reduxState.images[this.state.currentImage];

        if (imgData != null) {
            imageElement = <SelectedImage
                imgData={this.props.reduxState.images[this.state.currentImage]}
                tagsList={this.props.reduxState.slctImagTags}
            />
        }

        return (
            <div>
                CAROUSEL
                {imageElement}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Carousel);
