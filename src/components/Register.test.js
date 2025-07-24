import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Register from "./Register";

describe("Register Component", () => {
  test("renders Register component with form fields and button", () => {
    render(<Register />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /register/i })
    ).toBeInTheDocument();
  });

  test("shows error message when submitting empty form", () => {
    render(<Register />);
    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    expect(screen.getByRole("alert")).toHaveTextContent(
      /please fill in all fields/i
    );
  });

  test("calls onRegister with name and email when form is valid", () => {
    const mockOnRegister = jest.fn();
    render(<Register onRegister={mockOnRegister} />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "Jane Doe" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "secret123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    expect(mockOnRegister).toHaveBeenCalledWith({
      name: "Jane Doe",
      email: "jane@example.com",
    });
  });
});
