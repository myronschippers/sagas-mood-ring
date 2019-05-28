import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../modules/mapStateToProps';

// Material-Ui Components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

// Components
import ImageTagsList from '../ImageTagsList/ImageTagsList';

class SelectedImage extends Component {
    render() {
        const {
            imgData,
            tagsList,
        } = this.props;
        const tagsListElem = <ImageTagsList tags={tagsList} imageData={imgData}></ImageTagsList>;

        return (
            <div className="text-alnLeft">
                <Card>
                    <CardContent>
                        <Typography
                            variant="h5"
                            component="h3"
                        >
                            {imgData.title}
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        image={imgData.path}
                        title={imgData.title}
                    />
                    <CardActions>
                        {tagsListElem}
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default connect(mapStateToProps)(SelectedImage);
