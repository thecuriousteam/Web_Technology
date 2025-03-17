import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function UserProfile() {
  // destructure params
  const { company } = useParams();

  return (
    <div>
      <h1>Hello, {company}</h1>
    </div>
  );
}

const DynamicRoutingExample = () => {
  return (
    <div>
      <div>
        <Router>
          <nav className="space-x-5">
            <Link to={"/org/cbs"}>CBS</Link>
            <Link to={"/org/cdc"}>CDC</Link>
          </nav>

          <Routes>
            <Route path="/org/:company" element={<UserProfile />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default DynamicRoutingExample;
