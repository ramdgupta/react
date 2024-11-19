import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLayout from "./layout/AppLayout";
import { AppContext, AppProvider } from "./AppContext";
import AppRouter from "./AppRouter";
import { useContext } from "react";
import Loader from "./components/Loader";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

function App() {
  return (
    <AppProvider>
     <AppRouter/>
    </AppProvider>
  );
}

export default App;
