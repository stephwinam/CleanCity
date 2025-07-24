import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../components/Home";
import dataService from "../services/dataService";

jest.mock("../services/dataService", () => ({
  getLocations: () => ["Nairobi", "Kisumu", "Mombasa"],
  getWasteTypes: () => ["Plastic", "Organic", "Electronic"],
}));

describe("Home Component", () => {
  test("renders all form fields", () => {
    render(<Home />);

    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Pickup Location/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Waste Type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Preferred Pickup Date/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Additional Description/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /submit request/i })
    ).toBeInTheDocument();
  });

  test("shows error if required fields are missing", () => {
    render(<Home />);

    fireEvent.click(screen.getByRole("button", { name: /submit request/i }));

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Please fill in all required fields."
    );
  });

  test("shows success and clears form on valid submission", () => {
    render(<Home />);

    fireEvent.change(screen.getByLabelText(/Full Name/i), {
      target: { value: "Jane Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Pickup Location/i), {
      target: { value: "Nairobi" },
    });
    fireEvent.change(screen.getByLabelText(/Waste Type/i), {
      target: { value: "Plastic" },
    });
    fireEvent.change(screen.getByLabelText(/Preferred Pickup Date/i), {
      target: { value: "2025-07-25" },
    });
    fireEvent.change(screen.getByLabelText(/Additional Description/i), {
      target: { value: "Please come early." },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit request/i }));

    expect(screen.getByRole("status")).toHaveTextContent(
      "Your waste pickup request has been submitted!"
    );

    // Confirm form is reset
    expect(screen.getByLabelText(/Full Name/i).value).toBe("");
    expect(screen.getByLabelText(/Email/i).value).toBe("");
    expect(screen.getByLabelText(/Pickup Location/i).value).toBe("");
    expect(screen.getByLabelText(/Waste Type/i).value).toBe("");
    expect(screen.getByLabelText(/Preferred Pickup Date/i).value).toBe("");
    expect(screen.getByLabelText(/Additional Description/i).value).toBe("");
  });
});
