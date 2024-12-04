
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RedirectIfLoggedIn from "./services/route-service/RedirectIfLoggedIn";
import UnauthorizedPage from "./Pages/UnauthorizedPage";
import ErrorPage from './Pages/ErrorPage';
import MainPage from './Pages/MainContentPage';
import LoginPage from './Pages/LoginPage';
import DataReport from './Pages/ReportDataPage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      {/* <Route path="/" element={<RedirectIfLoggedIn />} /> */}
      <Route path="*" element={<ErrorPage />} />
      {/* <Route path="/auth/login" element={<LoginPage />} /> */}
      <Route path="/auth/Unauthorized" element={<UnauthorizedPage />} />

      {/* <Route element={<ProtectedRoute/>}> */}
        <Route
          path="/Console/MainPage"
          element={<MainPage/>}
        />
        <Route
          path="/Console/DataReport"
          element={<DataReport/>}
        />
      {/* </Route> */}
    </Routes>
  </Router>
  )
}

export default App
