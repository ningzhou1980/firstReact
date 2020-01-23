import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

// const HomePage = (props) => {
//   return (
//     <div>
//       <Link to="/topics">Topic</Link>
//       <button onClick={()=>props.history.push('/topics')}>Topics </button>
//       <h1>Home Page</h1>
//     </div>
//   );
// };

// const TopicList = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>Topic list page</h1>
//     </div>
//   );
// };

// const TopicDetail = props => {
//   console.log(props);
//   return (
//     <div>
//       <h1>Topic detail page: {props.match.params.topicId}</h1>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <Switch>
//         <Route path="/topic/:topicId" component={TopicDetail} />
//         <Route path="/topics" component={TopicList} />
//         <Route path="/" component={HomePage} />
//       </Switch>
//     </div>
//   );
// };

export default App;
