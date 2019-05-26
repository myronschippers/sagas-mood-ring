import axios from 'axios';
import { put } from 'redux-saga/effects';

function* getImages() {
    try {
        const imagesResponse = yield axios.get('/api/images');
        console.log('imagesResponse: ', imagesResponse);
        yield put({
            type: 'SET_IMAGES',
            payload: imagesResponse.data,
        });
    } catch(err) {
        console.log('ERROR getting images: ', err);
    }
}

export default getImages;
