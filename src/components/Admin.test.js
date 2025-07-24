import React from "react";
import { render, screen } from "@testing-library/react";
import Admin from "./Admin";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Admin Component", () => {
  test("renders Admin component and logs DOM", () => {
    render(
      <BrowserRouter>
        <Admin />
      </BrowserRouter>
    );

    // Optional: Log the DOM to inspect
    screen.debug();

    // Adjust this if needed
    expect(screen.getByText(/admin/i)).toBeInTheDocument();
  });
});
