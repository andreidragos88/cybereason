import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Grid from "./Grid";

jest.mock("node-fetch");

describe("Grid Component", () => {
  test("renders header and data rows correctly", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue([
        { id: 1, name: "John Doe", username: "johndoe" },
        { id: 2, name: "Jane Doe", username: "janedoe" },
      ]),
    });

    render(<Grid />);

    await waitFor(() => screen.getByText("ID"));

    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Username")).toBeInTheDocument();

    const johnDoeName = await screen.findByText("John Doe");
    const johnDoeUsername = await screen.findByText("johndoe");

    expect(johnDoeName).toBeInTheDocument();
    expect(johnDoeUsername).toBeInTheDocument();

    const janeDoeName = await screen.findByText("Jane Doe");
    const janeDoeUsername = await screen.findByText("janedoe");
    expect(janeDoeName).toBeInTheDocument();
    expect(janeDoeUsername).toBeInTheDocument();
  });
});
