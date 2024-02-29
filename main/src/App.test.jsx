import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import config from "./config";

jest.mock("./config", () => [
  { id: "app1", url: "dummy-url-1" },
  { id: "app2", url: "dummy-url-2" },
]);

jest.mock("./components/ExternalApp", () =>
  jest.fn(() => <div data-testid="external-app" />)
);

describe("App Component", () => {
  it("renders ExternalApp components for each app in the config", async () => {
    const rootEl = document.createElement("div");
    const { getAllByTestId } = render(<App rootEl={rootEl} />);
    const externalApps = getAllByTestId("external-app");

    expect(externalApps).toHaveLength(config.length);
  });
});
