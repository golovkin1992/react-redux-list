import {
  call,
  all,
  put,
  takeLatest,
} from 'redux-saga/effects';
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
import apiBooks from '../api';

function* getBooks() {
  try {
    const books = yield call(apiBooks.getBooks);
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
    const response = yield call(apiBooks.postBook, payload);
    yield put(postBookSuccessAction(response.data));
  } catch (e) {
    yield put(failureAction(e.message));
  }
}

function* watchPostBook() {
  yield takeLatest(POST_BOOK_REQUEST, postBook);
}

function* deleteBook({ payload }) {
  try {
    yield call(apiBooks.deleteBook, payload);
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
    yield call(apiBooks.putBook, payload);
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
    const response = yield call(apiBooks.getBook, payload);
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
