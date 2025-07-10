import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { PublicLayout } from "@/layouts/public-layout";
import HomePage from "@/routes/home";
import { MainLayout } from "@/layouts/main-layout";

import AuthenticationLayout from "@/layouts/auth-layout";

import { SignInPage } from "@/routes/sign-in";
import { SignUpPage } from "@/routes/sign-up";
import ProtectedRoutes from "@/layouts/protected-routes";

// Dummy protected page
const DashboardPage = () => {
  return <h1 className="text-3xl font-bold">Dashboard Page</h1>;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* authentication layout */}
        <Route element={<AuthenticationLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>

        {/* protected routes */}
        <Route
          element={
            <ProtectedRoutes>
              <MainLayout />
            </ProtectedRoutes>
          }
        >
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* Baad me yaha aur protected pages add kar sakta */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
