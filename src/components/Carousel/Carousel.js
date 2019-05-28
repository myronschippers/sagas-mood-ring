import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../modules/mapStateToProps';
import SelectedImage from '../SelectedImage/SelectedImage';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class Carousel extends Component {
    state = {
        currentImage: 0,
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_IMAGES_TAGS',
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
                imgData={imgData}
                tagsList={imgData.tagsList}
            />;
        }

        return (
            <div>
                <div className="vr vr_x3">
                    <Grid
                        container
                        justify="center"
                        alignItems="center"
                        spacing={8}
                    >
                        <Grid item xs={12} sm={3}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.clickPrevImage}
                            >
                                Previous
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {imageElement}
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.clickNextImage}
                            >
                                Next
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Carousel);
