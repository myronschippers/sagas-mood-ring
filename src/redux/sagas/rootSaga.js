
import { takeEvery } from 'redux-saga/effects';
import getImages from './getImages.saga';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_IMAGES', getImages);
}

export default rootSaga;