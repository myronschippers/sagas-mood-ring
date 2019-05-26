
import { takeEvery } from 'redux-saga/effects';
import getImages from './getImages.saga';
import getImagesTags from './getImagesTags.saga';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_IMAGES', getImages);
    yield takeEvery('GET_IMAGES_TAGS', getImagesTags);
}

export default rootSaga;