import {
  call,
  all,
  put,
  takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';
import generateID from '../utils/generateID';
import url from '../constants/URL';
import {
  GET_BOOKS_REQUEST,
  POST_BOOK_REQUEST,
  DELETE_BOOK_REQUEST,
  PUT_BOOK_REQUEST,
  GET_BOOK_REQUEST,
} from '../constants/ActionTypes';
import {
  getBooksSuccessAction,
  postBookSuccessAction,
  deleteBookSuccessAction,
  putBookSuccessAction,
  getBookSuccessAction,
  failureAction,
} from '../actions';

function* getBooks() {
  try {
    const books = yield call(axios.get, url);
    yield put(getBooksSuccessAction(books));
  } catch (e) {
    yield put(failureAction(e.message));
  }
}

function* watchGetBooks() {
  yield takeLatest(GET_BOOKS_REQUEST, getBooks);
}

function* postBook({ payload }) {
  try {
    const book = Object.assign({ id: generateID() }, payload);
    yield call(axios.post, url, book);
    yield put(postBookSuccessAction(book));
  } catch (e) {
    yield put(failureAction(e.message));
  }
}

function* watchPostBook() {
  yield takeLatest(POST_BOOK_REQUEST, postBook);
}

function* deleteBook({ payload }) {
  try {
    yield call(axios.delete, `${url}/${payload}`);
    yield put(deleteBookSuccessAction(payload));
  } catch (e) {
    yield put(failureAction(e.message));
  }
}

function* watchDeleteBook() {
  yield takeLatest(DELETE_BOOK_REQUEST, deleteBook);
}

function* putBook({ payload }) {
  try {
    yield call(axios.put, `${url}/${payload.id}`, payload);
    yield put(putBookSuccessAction(payload));
  } catch (e) {
    yield put(failureAction(e.message));
  }
}

function* watchChangeBook() {
  yield takeLatest(PUT_BOOK_REQUEST, putBook);
}

function* getBook({ payload }) {
  try {
    const response = yield call(axios.get, `${url}/${payload}`);
    yield put(getBookSuccessAction(response));
  } catch (e) {
    yield put(failureAction(e.message));
  }
}

function* watchGetBook() {
  yield takeLatest(GET_BOOK_REQUEST, getBook);
}

export default function* rootSaga() {
  yield all([
    watchGetBooks(),
    watchPostBook(),
    watchDeleteBook(),
    watchChangeBook(),
    watchGetBook(),
  ]);
}
