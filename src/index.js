import {render} from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom"; //history API를 사용하여 URL와 UI를 동기화하는 라우터
import App from './App';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="expenses" element={<Expenses/>}/>
                <Route path="invoices" element={<Invoices/>}/>
            </Route>
            {/* Route를 중첩하면 URL도 중첩되지만 UI 컴포넌트들도 중첩된다 */}
        </Routes>
    </BrowserRouter>,
    rootElement
);