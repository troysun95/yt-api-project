import styles from "App.module.scss";
import { UserProvider } from "contexts/UserContext";
import { HomePage, LoginPage, RedirectPage,ErrorPage } from "pages";
import { BrowserRouter, Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.appContainer}>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/redirect" element={<RedirectPage/>} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
