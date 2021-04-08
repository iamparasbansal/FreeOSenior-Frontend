import React from "react"
import theme from "./src/styles/theme.js"
import { ThemeProvider } from "@material-ui/core/styles"
import { Provider } from "react-redux"
import { SnackbarProvider } from "notistack"
import store from "./src/store/index.js"
import { useDispatch } from "react-redux"
import { useAuthState } from "./src/utils/auth"

const AuthWrapper = ({ children }) => {
  const dispatch = useDispatch()
  useAuthState(dispatch)
  return children
}

const RootWrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <ThemeProvider theme={theme}>
          <AuthWrapper>{children}</AuthWrapper>
        </ThemeProvider>
      </SnackbarProvider>
    </Provider>
  )
}

export default ({ element }) => <RootWrapper>{element}</RootWrapper>
