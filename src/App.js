import "./App.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { GlobalLayout } from "./Layouts/GlobalLayout";
import ErrorPage from "./Pages/ErrorPage";
import { useState } from "react";
import { HomePage } from "./Pages/HomePage";
import { LoginPage } from "./Pages/LoginPage";
import { RegistrationPage } from "./Pages/RegistrationPage";

const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

function App() {
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <GlobalLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          element: (
            <HomePage urlEndpoint={urlEndpoint} shouldRefetch={shouldRefetch} />
          ),
          index: true,
        },
        {
          path: "/login",
          element: <LoginPage urlEndpoint={urlEndpoint} />,
        },
        {
          path: "/registration",
          element: <RegistrationPage />,
        },
      ],
    },
  ]);
  return (
    <div className='App'>
      <header className='App-header'>
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
