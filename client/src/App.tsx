import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Complie from "./pages/Complie"
import NotFound from "./pages/NotFound"
import { ThemeProvider } from "./components/theme-provider"
import { Toaster } from "./components/ui/sonner"

function App() {

  return (
    <>
     <Toaster position="top-center" theme={"dark"} />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compile" element={<Complie />} />
          <Route path="/compile/:urlId" element={<Complie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
