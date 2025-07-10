import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { PublicLayout } from "@/layouts/public-layout";
import HomePage from "@/routes/home";
import { MainLayout } from "@/layouts/main-layout";

import AuthenticationLayout from "@/layouts/auth-layout";

import { SignInPage } from "@/routes/sign-in";
import { SignUpPage } from "@/routes/sign-up";
import ProtectedRoutes from "@/layouts/protected-routes";



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
      <Route element={<ProtectedRoutes><MainLayout /></ProtectedRoutes>
    }
    >
      {/* add all the protected Routes */}

      </Route>
    </Routes>
   </Router>
  );
};

export default App