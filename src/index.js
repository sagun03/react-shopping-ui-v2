import React from "react"
import { Provider } from "react-redux"
import ReactDOM from "react-dom/client"
import store, { persistor } from "./redux/store"
// import App from "./App"
import App from "./App-port"
import { PersistGate } from "redux-persist/integration/react"
import { HelmetProvider } from "react-helmet-async"
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { enableMapSet } from "immer";

enableMapSet()

const queryClient = new QueryClient();

const rootElement = document.getElementById("root")
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)

  // Render the app
  root.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <HelmetProvider>
            <QueryClientProvider client={queryClient}>
              <UserAuthContextProvider>
                <App />
              </UserAuthContextProvider>
            </QueryClientProvider>
          </HelmetProvider>
      </PersistGate>
    </Provider>
  )
} else {
  console.error("Failed to find the root element to mount React.")
}
