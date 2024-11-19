import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AppContext } from "./AppContext";
import { useContext } from "react";
import Loader from "./components/Loader";
import LoginPage from "./pages/LoginPage";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import BusinessSolutionTemplate from "./pages/templatePage/businessTemplate/BusinessSolutionTemplate";
import BusinessTemplateDetail from "./pages/templatePage/businessTemplate/BusinessTemplateDetail";
import ExperimentTemplate from "./pages/templatePage/experimentTemplate/ExperimentTemplate";

import NotFoundPage from "./pages/NotFoundPage";
const AppRouter = () => {
  const { loading, setLoading } = useContext(AppContext);
  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/dashboard" element={<AppLayout />}>
              <Route index element={<Dashboard />} />
            </Route>
            <Route index path="/" element={<LoginPage />} /> {/* Home page */}
            <Route path="/business/template/*" element={<AppLayout />}>
              <Route index element={<BusinessSolutionTemplate />} />
              <Route path="create" element={<BusinessSolutionTemplate />} />

              <Route path="search" element={<BusinessSolutionTemplate />} />
              <Route path="detail/:id" element={<BusinessTemplateDetail />} />
              {/* <Route path="/create" element={<BusinessSolutionTemplate />} /> */}
            </Route>
            <Route path="/experiment/template/*" element={<AppLayout />}>
              <Route index element={<ExperimentTemplate />} />
              <Route path="create" element={<ExperimentTemplate />} />
              <Route path="search" element={<ExperimentTemplate />} />
              <Route path="clone" element={<ExperimentTemplate />} />
            </Route>
            {/* Redirect to Login for non-matching routes */}
            <Route
              path="*"
              element={
                <NotFoundPage />
                /*  <div>
                  <h2>This link does not exist. Redirecting to login...</h2>
                  <Navigate to="/" replace />
                </div> */
              }
            />
          </Routes>
        </Suspense>
      )}
    </Router>
  );
};
export default AppRouter;
