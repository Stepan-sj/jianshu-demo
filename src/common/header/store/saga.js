import { put, call, takeEvery } from 'redux-saga/effects'


function* request(){
    put('focus')
}

export default function* (){
    yield takeEvery('init',request)
}