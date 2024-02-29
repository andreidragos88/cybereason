import React, { useEffect, useState } from "react";

const ExternalApp = ({ containerId, appUrl, rootEl }) => {
  const [error, setError] = useState(false);
  useEffect(() => {
    const loadExternalComponent = async () => {
      try {
        await import(/* webpackIgnore: true */ appUrl);
      } catch (error) {
        setError(true);
        console.error("Error loading external component:", error);
      }
    };

    loadExternalComponent();
  }, [containerId, appUrl, rootEl]);

  return (
    <div id={containerId} className="app-container">
      {error === false ? (
        <div className="loading" data-testid="app-loading">
          Loading...
        </div>
      ) : (
        <div className="app-load-error" data-testid="app-load-error">
          App failed to load.
        </div>
      )}
    </div>
  );
};

export default ExternalApp;
