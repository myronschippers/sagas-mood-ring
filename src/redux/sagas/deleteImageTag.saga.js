import axios from 'axios';
import { put } from 'redux-saga/effects';

function* deleteImageTag(action) {
    try {
        const {
            imageId,
            tagId,
        } = action.payload;
        yield axios.delete(`/api/images/deletetag/?imageId=${imageId}&tagId=${tagId}`);
        yield put({
            type: 'GET_IMAGES_TAGS',
        });
    } catch(err) {
        console.log('ERROR deleteing tag from an image: ', err);
    }
}

export default deleteImageTag;
