import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Header, Suspense } from './components';

const Home = lazy(() => import('./pages/Home'));
const Page1 = lazy(() => import('./pages/Page1'));
const Page2 = lazy(() => import('./pages/Page2'));

function App() {
    return (
        <>
            <Header />
            <hr />
            <Suspense>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/page1" element={<Page1 />}></Route>
                    <Route path="/page2" element={<Page2 />}></Route>
                </Routes>
            </Suspense>
        </>
    );
}

export default App;
