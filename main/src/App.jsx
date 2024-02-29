import React from "react";
import config from "./config";
import ExternalApp from "./components/ExternalApp";

const App = ({ rootEl }) => {
  return (
    <>
      {config.map((app) => (
        <ExternalApp
          key={app.id}
          appUrl={app.url}
          containerId={app.id}
          rootEl={rootEl}
        />
      ))}
    </>
  );
};

export default App;
