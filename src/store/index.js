import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer';
import fontsLoader from '../middlewares/fontsLoader';

const enhancer = applyMiddleware(fontsLoader);

export default createStore(reducer, enhancer);