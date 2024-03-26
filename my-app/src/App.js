import { Footer} from './widgets';
import {Navigation} from './widgets/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrintOrdersPage } from './pages/PrintOrdersPage';
import Home from './pages/HomePage';
import AboutPage from './pages/AboutPage';
function App() {
  return (
    <>
      <Navigation />
        <BrowserRouter>
        <Routes>
                <Route>
                  <Route path="/home" Component={Home} />
                  <Route path="printorders" element={<PrintOrdersPage />} />
                  <Route path="/about" Component={AboutPage} />
                </Route>
              </Routes>
        </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
