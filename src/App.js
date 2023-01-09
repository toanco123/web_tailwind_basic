import Navbar from "./components/navBarContent/Navbar";
import Rightside from "./components/sideContent/Rightside";
import Container from "./components/headerContent/Header";
import Aboutme from "./components/aboutMeContent/Aboutme";
import Worked from "./components/workesContent/Worked";
import Something from "./components/someThingsContent/Something";
import Othernoteworthy from "./components/otherNoteworthyContent/Othernoteworthy";
import Getintouch from "./components/getInTouchContent/Getintouch";
import Leftside from "./components/sideContent/Leftside";

function App() {
  return (
    <>
      <Navbar />
      <Rightside />
      <Leftside />
      <Container />
      <Aboutme />
      <Worked />
      <Something />
      <Othernoteworthy />
      <Getintouch />
    </>
  );
}
export default App;
