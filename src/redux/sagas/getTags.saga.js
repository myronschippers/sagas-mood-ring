import axios from 'axios';
import { put } from 'redux-saga/effects';

function* getTags() {
    try {
        const tagsResponse = yield axios.get('/api/tags');
        console.log('tagsResponse: ', tagsResponse);
        yield put({
            type: 'SET_TAGS',
            payload: tagsResponse.data,
        });
    } catch(err) {
        console.log('ERROR getting images: ', err);
    }
}

export default getTags;
