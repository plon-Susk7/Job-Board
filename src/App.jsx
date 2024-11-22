import Navbar from "./components/Navbar"
import Body from "./components/Body"
import { RecoilRoot } from "recoil"


function App() {

  return (
    <>
      <RecoilRoot>
        <div className="dark:bg-black dark:text-white">
          <Navbar />
          <Body />
        </div>
      </RecoilRoot>
    </>
  )
}

export default App
