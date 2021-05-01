import { Route, Switch } from "react-router";
import Layout from "./components/layout/Layout";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeet from "./pages/NewMeet";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/new-meetup">
          <NewMeet />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
