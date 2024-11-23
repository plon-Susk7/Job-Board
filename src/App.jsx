import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<>
			<RecoilRoot>
				<div className="dark:bg-black dark:text-white">
					<Navbar />
					<Body />
				</div>
				<Toaster position="bottom-center" reverseOrder={false} />
			</RecoilRoot>
		</>
	);
}

export default App;
