import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ExternalApp from "./ExternalApp";

test("renders loading message", () => {
  const { getByTestId } = render(
    <ExternalApp
      containerId="test-container"
      appUrl="dummy-url"
      rootEl="root"
    />
  );
  const loadingElement = getByTestId("app-loading");
  expect(loadingElement).toBeInTheDocument();
});

test("renders error message", async () => {
  const { queryByTestId } = render(
    <ExternalApp
      containerId="test-container"
      appUrl="http://localhost:1111/dummy.js"
      rootEl="root"
    />
  );
  await waitFor(() => {
    const errorElement = queryByTestId("app-load-error");
    expect(errorElement).toBeInTheDocument();
  });
});
