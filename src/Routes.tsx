import {Route, Routes} from "react-router";
import {Home} from "./pages/Home.tsx";

export const AppRoutes = () => {

  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  )
}
