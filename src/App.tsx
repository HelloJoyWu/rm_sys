import { HashRouter, Routes, Route } from "react-router-dom";
import '../res/css/reset.scss'
import Login from './screen/login'
import SlotAlert from './screen/slot/SlotAlert'
import '../res/css/login.scss'


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/slotAlert' element={<SlotAlert />} />
        <Route path='/' element={<Login />} />

      </Routes>
    </HashRouter>
  )

}

export default App
