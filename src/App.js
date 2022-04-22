import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { Container } from "react-bootstrap";
import ProjectScreen from "./screens/ProjectScreen";
import ContactScreen from "./screens/ContactScreen";

function App() {
  return (
    <div className="App white">
      <NavBar />
      <Container style={{ minHeight: "42rem" }}>
        <HomeScreen />
      </Container>
      <Container style={{ minHeight: "39rem" }}>
        <AboutScreen />
      </Container>
      <Container
        className="mt-5"
        style={{ minHeight: "27rem", marginBottom: "20rem" }}
      >
        <ProjectScreen />
      </Container>
      <Container style={{ minHeight: "45rem" }}>
        <ContactScreen />
      </Container>
    </div>
  );
}

export default App;
