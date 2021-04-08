import { Hello } from "../components/Hello";
import Panel from "../components/Panel"; 
import Navbar from "../components/NavBar";

export default () => (
  <div>
    <Navbar />
    <Hello title="Jacopo PoC" />
    <Panel />
  </div>
)