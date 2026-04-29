import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import { RouterProvider,  createBrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import LandingPage from './components/LandingPage.tsx';
import Signup from './components/Signup.tsx';
import Login from './components/Login.tsx';
import UserDashboard from './components/UserDashboard.tsx';
import HomeNGO from './components/HomeNGO.tsx';
import PaymentSucess from "./components/PaymentSuccess.tsx";
import ChooseDonation from './components/ChooseDonation.tsx';
import VolunteerApply from './components/VolunteerApply.tsx';
import VolunteeringForm from './components/VolunteeringForm.tsx';
import About from './components/About.tsx';
import Contact from './components/Contacts.tsx';
import NotFound from './components/NotFound.tsx';
import AnimatedPaymentCancel from './components/AnimatedPaymentCancel.tsx';
import SpecialDonation from './components/SpecialDonate.tsx';
import'react-toastify/ReactToastify.css'



// const router = createBrowserRouter([
//   { path: "/", element: <LandingPage />},
//   { path: "/signup", element: <Signup />},
//   { path: "/signin", element: <Login />},
//   { path: "/home", element: <HomeNGO />},
//   { path: "/support/:cause", element: <SpecialDonation />},
//   { path: "/:product/:ngoName", element: <ChooseDonation />},
//   { path: "/userdashboard", element: <UserDashboard />},
//   { path: "/success", element: <PaymentSucess />},
//   { path: "/volunteer/apply", element: <VolunteerApply />},
//   { path: "/voluteeringform", element: <VolunteeringForm />},
//   { path: "/about", element: <About />},
//   { path: "/contact", element: <Contact />},
//   { path: "/cancel", element: <AnimatedPaymentCancel />},
//   { path: "*", element: <NotFound /> }
 
// ]);

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/signup", element: <Signup /> },
  { path: "/signin", element: <Login /> },

  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <HomeNGO />
      </ProtectedRoute>
    ),
  },

  {
    path: "/support/:cause",
    element: (
      <ProtectedRoute>
        <SpecialDonation />
      </ProtectedRoute>
    ),
  },

  {
    path: "/:product/:ngoName",
    element: (
      <ProtectedRoute>
        <ChooseDonation />
      </ProtectedRoute>
    ),
  },

  {
    path: "/userdashboard",
    element: (
      <ProtectedRoute>
        <UserDashboard />
      </ProtectedRoute>
    ),
  },

  {
    path: "/success",
    element: (
      <ProtectedRoute>
        <PaymentSucess />
      </ProtectedRoute>
    ),
  },

  {
    path: "/volunteer/apply",
    element: (
      <ProtectedRoute>
        <VolunteerApply />
      </ProtectedRoute>
    ),
  },

  {
    path: "/voluteeringform",
    element: (
      <ProtectedRoute>
        <VolunteeringForm />
      </ProtectedRoute>
    ),
  },

  {
    path: "/about",
    element: (
      <ProtectedRoute>
        <About />
      </ProtectedRoute>
    ),
  },

  {
    path: "/contact",
    element: (
      <ProtectedRoute>
        <Contact />
      </ProtectedRoute>
    ),
  },

  {
    path: "/cancel",
    element: (
      <ProtectedRoute>
        <AnimatedPaymentCancel />
      </ProtectedRoute>
    ),
  },

  { path: "*", element: <NotFound /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
