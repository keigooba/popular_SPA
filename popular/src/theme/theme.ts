import {extendTheme} from "@chakra-ui/react"

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: "gray.800",
        textAlign: "center",
        fontSize: "1.2rem",
        minHeight: "960px",
      }
    }
  }
});

export default theme
