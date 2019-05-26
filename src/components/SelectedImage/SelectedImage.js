import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../modules/mapStateToProps';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

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
