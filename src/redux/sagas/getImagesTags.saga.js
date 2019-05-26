import axios from 'axios';
import { put } from 'redux-saga/effects';

function* getImagesTags() {
    try {
        const imagesTagsResponse = yield axios.get('/api/images/withtags');
        console.log('imagesTagsResponse: ', imagesTagsResponse);
        yield put({
            type: 'SET_IMAGES',
            payload: imagesTagsResponse.data,
        });
    } catch(err) {
        console.log('ERROR getting images: ', err);
    }
}

export default getImagesTags;
