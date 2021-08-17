import HomePage from "./pages/homepage";
import styled from "styled-components";
import tw from "twin.macro";
import { NavBar } from "./components/navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Aboutpage from "./pages/aboutpage";
import Blogs from "./pages/blogspage";
import { SingleBlog } from "./components/singleblog";
import ContactPage from "./pages/contactpage";
import Project from "./pages/projectpage";
const AppContainer = styled.div`
  ${tw`
  bg-pink-700
      w-full
      h-full
      flex
      flex-col
`};
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Route exact path="/">
          <NavBar />
          <HomePage />
        </Route>
        <Route path="/about">
          <NavBar />
          <Aboutpage />
        </Route>
        <Route path="/blogs">
          <NavBar />
          <Blogs />
        </Route>
        <Route path="/blog/:slug">
          <NavBar />
          <SingleBlog />
        </Route>
        <Route path="/contact">
          <NavBar />
          <ContactPage />
        </Route>
        <Route path="/project">
          <NavBar />
          <Project />
        </Route>
      </Router>
    </AppContainer>
  );
}

export default App;
