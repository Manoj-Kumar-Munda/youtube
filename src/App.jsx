import React from "react";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContent from "./components/MainContent";
import SearchResults from "./components/SearchResults";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <MainContent />,
      },
      // {
      //   path: "watch",
      //   element: <WatchPage />,
      // },
      {
        path: "search",
        element: <SearchResults />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}>
        <Home />
      </RouterProvider>
    </Provider>
  );
}

export default App;
