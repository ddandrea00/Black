import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app_body">
              <Sidebar />
              <Switch>
                <Route path="/channel/:channelId">
                  <Chat />
                </Route>
                <Route path="/">
                  <div className="app_welcome">
                  <h1>Welcome to Black!</h1>
                  <h4>(...it's like Slack in kind of dark mode)</h4>
                  <br />
                  <h2>Dev-Points</h2>
                  <ul>
                    <li>Built in React.js</li>
                    <li>Google User Authtentication via Firebase</li>
                    <li>Real-time Database (Firebase)</li>
                    <li>State Management via React Context API</li>
                    <li>Material UI to make it look cool.</li>
                  </ul>
                  <br />
                  <h2>Current Functionality</h2>
                  <ul>
                    <li>Add a Channel!</li>
                    <li>Feel free to add messages to the chat (...maybe I'll respond)</li>
                    <li>Did you see your Google Account avatar/photo & name in the top left?</li>
                  </ul>
                  <br />
                  <h2>More Functionality Coming Soon...</h2>
                  </div>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
