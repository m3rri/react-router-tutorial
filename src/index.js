import {render} from 'react-dom';
import { BrowserRouter } from "react-router-dom"; //history API를 사용하여 URL와 UI를 동기화하는 라우터
import App from './App';

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    rootElement
);