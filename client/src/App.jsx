import React from "react";

import * as css from "./css/app.css";

import Routers from "./utils/router";

const App = () => {
  return (
    <div>
      {/* <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes> */}
      <Routers />
    </div>
  );
};

export default App;
