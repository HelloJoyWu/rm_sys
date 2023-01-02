import { HashRouter, Routes, Route } from "react-router-dom";
import '../res/css/reset.scss'
import Layout from "./components/Layout";
import Login from './screen/login'
import SlotAlert from './screen/slot/SlotAlert'
import SlotRiskPlayer from './screen/slot/SlotRiskPlayer'
import '../res/css/login.scss'


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/slotAlert' element={<SlotAlert />} />
          <Route path='/slotRiskPlayer' element={<SlotRiskPlayer />} />
        </Route>
        <Route path='/' element={<Login />} />
      </Routes>
    </HashRouter>
  )

}

export default App
