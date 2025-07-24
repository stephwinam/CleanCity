import React from "react";
import { render, screen } from "@testing-library/react";
import LandingPage from "./LandingPage";
import { MemoryRouter } from "react-router-dom";

describe("LandingPage Component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
  });

  test("renders the main title", () => {
    expect(
      screen.getByRole("heading", { name: /Waste Pickup Scheduler/i })
    ).toBeInTheDocument();
  });

  test("renders the Features section title", () => {
    expect(
      screen.getByRole("heading", { name: /Features/i })
    ).toBeInTheDocument();
  });

  test("renders the Testimonials section title", () => {
    expect(
      screen.getByRole("heading", { name: /What Our Users Say/i })
    ).toBeInTheDocument();
  });

  test("renders the 'Sign Up' button", () => {
    expect(screen.getByRole("link", { name: /Sign Up/i })).toBeInTheDocument();
  });

  test("renders the 'Schedule Pickup' and 'Read Blog' buttons", () => {
    expect(
      screen.getByRole("link", { name: /Schedule Pickup/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Read Blog/i })
    ).toBeInTheDocument();
  });
});
