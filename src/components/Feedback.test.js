import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Feedback from "./Feedback";

describe("Feedback Component", () => {
  test("renders form elements correctly", () => {
    render(<Feedback />);

    // Check heading and brand
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByText("CleanCity")).toBeInTheDocument();
    expect(
      screen.getByText("Report Missed Pickup / Feedback")
    ).toBeInTheDocument();

    // Check form fields
    expect(screen.getByLabelText("Request ID")).toBeInTheDocument();
    expect(screen.getByLabelText("Feedback")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  test("shows error when submitting empty form", () => {
    render(<Feedback />);
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));
    expect(screen.getByRole("alert")).toHaveTextContent(
      "Please fill in all fields."
    );
  });

  test("shows success message when feedback is submitted", () => {
    render(<Feedback />);

    fireEvent.change(screen.getByLabelText("Request ID"), {
      target: { value: "REQ-123" },
    });

    fireEvent.change(screen.getByLabelText("Feedback"), {
      target: { value: "My garbage was not picked up." },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(screen.getByRole("status")).toHaveTextContent(
      "Thank you for your feedback!"
    );
  });
});
