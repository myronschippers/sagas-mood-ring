import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../modules/mapStateToProps';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

class SelectedImage extends Component {
    handleDeleteTag = (event) => {
        const tagIdx = event.target.dataset.idx;
    }

    handleClickTag = (event) => {
        const tagIdx = event.target.dataset.idx;
    }

    removeTagFromImage(tagIndex) {
        const tagId = this.props.imgData.tags[tagIndex].id;
        console.log('removeTagFromImage');
    }

    render() {
        const {
            imgData,
            tagsList,
        } = this.props;
        let tagsListElem = null;

        if (tagsList != null && tagsList.length > 0) {
            const tagItems = tagsList.map((tag, tagIndex) => {
                return <Chip
                            key={tagIndex}
                            data-idx={tagIndex}
                            label={tag.name}
                            onClick={this.handleClickTag}
                            onDelete={this.handleDeleteTag}
                        />;
            });
            tagsListElem = (
                <div>
                    {tagItems}
                </div>
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
