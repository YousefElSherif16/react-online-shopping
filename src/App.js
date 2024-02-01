import Home from "./components/Home/Home";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import NotificationBar from "./components/NotificationBar/NotificationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";

const Dashboard = React.lazy(() => import("./components/Dashboard/Dashboard"));
function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Toaster />
        </div>
        <NotificationBar />
        <NavigationBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
