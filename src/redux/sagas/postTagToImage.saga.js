import axios from 'axios';
import { put } from 'redux-saga/effects';

function* postTagsToImage(action) {
    try {
        yield axios.post('/api/images/addtag', action.payload);
        yield put({
            type: 'GET_IMAGES_TAGS',
        });
    } catch(err) {
        console.log('ERROR getting images: ', err);
    }
}

export default postTagsToImage;
