import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../modules/mapStateToProps';

class Carousel extends Component {
    state = {
        currentImage: 0,
    }

    render() {
        return (
            <div>
                CAROUSEL
            </div>
        );
    }
}

export default connect(mapStateToProps)(Carousel);
