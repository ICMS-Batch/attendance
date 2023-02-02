import React from "react";

import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import "./css/app.css";
import Routers from "./utils/router";

const App = () => {
  return (
    <div>
      <MantineProvider withNormalizeCSS withCSSVariables>
        <NotificationsProvider position="top-right">
          <Routers />
        </NotificationsProvider>
      </MantineProvider>
    </div>
  );
};

export default App;
