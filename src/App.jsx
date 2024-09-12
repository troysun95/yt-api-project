import styles from "App.module.scss";
import { HomePage, LoginPage, RedirectPage } from "pages";
import ErrorPage from "pages/ErrorPage";
import { BrowserRouter, Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className={styles.appContainer}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/redirect" element={<RedirectPage/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
