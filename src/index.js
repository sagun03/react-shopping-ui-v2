import React from "react"
import { Provider } from "react-redux"
import ReactDOM from "react-dom/client"
import store, { persistor } from "./redux/store"
import App from "./App"
import { PersistGate } from "redux-persist/integration/react"
import { HelmetProvider } from "react-helmet-async"

const rootElement = document.getElementById("root")
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)

  // Render the app
  root.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <HelmetProvider>
            <App />
          </HelmetProvider>
      </PersistGate>
    </Provider>
  )
} else {
  console.error("Failed to find the root element to mount React.")
}
