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

    clickPrevImage = (event) => {
        let nextImg = this.state.currentImage - 1;

        if (nextImg < 0) {
            nextImg = this.props.reduxState.images.length - 1;
        }

        this.setState({
            currentImage: nextImg,
        });
    }

    clickNextImage = (event) => {
        let nextImg = this.state.currentImage + 1;

        if (nextImg ===  this.props.reduxState.images.length) {
            nextImg = 0;
        }

        this.setState({
            currentImage: nextImg,
        });
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
                <button onClick={this.clickPrevImage}>Previous</button>
                <button onClick={this.clickNextImage}>Next</button>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Carousel);
