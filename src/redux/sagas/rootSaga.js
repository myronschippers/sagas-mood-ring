
import { takeEvery } from 'redux-saga/effects';
import getImages from './getImages.saga';
import getImagesTags from './getImagesTags.saga';
import getTags from './getTags.saga';
import postTagToImage from './postTagToImage.saga';
import deleteImageTag from './deleteImageTag.saga';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_IMAGES', getImages);
    yield takeEvery('GET_IMAGES_TAGS', getImagesTags);
    yield takeEvery('GET_TAGS', getTags);
    yield takeEvery('POST_TAG_TO_IMAGE', postTagToImage);
    yield takeEvery('DELETE_TAG_FROM_IMAGE', deleteImageTag);
}

export default rootSaga;