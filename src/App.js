import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import NotificationBar from "./components/NotificationBar/NotificationBar";

function App() {
  return (
    <>
      <NotificationBar />
      <NavigationBar />
      {/* <Home /> */}
      <Dashboard />
    </>
  );
}

export default App;
