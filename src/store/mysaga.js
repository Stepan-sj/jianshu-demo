import { all, takeEvery,put} from 'redux-saga/effects'
import init from '../common/header/store/saga'

function* mysaga(){
    yield init();
}

export default mysaga;