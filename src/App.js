import Home from "./components/Home/Home";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import NotificationBar from "./components/NotificationBar/NotificationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Toast from "./UI/Toast";
import Footer from "./components/Footer/Footer";

const Dashboard = React.lazy(() => import("./components/Dashboard/Dashboard"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Toast />
        <NotificationBar />
        <NavigationBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
