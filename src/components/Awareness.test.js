import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Awareness from "./Awareness";
import { MemoryRouter } from "react-router-dom";

jest.useFakeTimers();

describe("Awareness Component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Awareness />
      </MemoryRouter>
    );
  });

  test("renders main heading and brand", () => {
    expect(
      screen.getByRole("heading", { name: /Eco Awareness Center/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/CleanCity/i)).toBeInTheDocument();
  });

  test("displays a daily tip and cycles tips", () => {
    const firstTip = screen.getByText(/Compost your food scraps/i);
    expect(firstTip).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(5000); // advance to next tip
    });

    expect(screen.getByText(/Use reusable bags/i)).toBeInTheDocument();
  });

  test("renders quiz question and allows answering", () => {
    const question = screen.getByText(
      /Which of these items is NOT recyclable/i
    );
    expect(question).toBeInTheDocument();

    const option = screen.getByRole("button", {
      name: /Pizza boxes with grease/i,
    });
    fireEvent.click(option);

    expect(screen.getByText(/Correct!/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Pizza boxes with grease cannot be recycled/i)
    ).toBeInTheDocument();
  });

  test("cycles to next quiz question after clicking next", () => {
    const option = screen.getByRole("button", {
      name: /Pizza boxes with grease/i,
    });
    fireEvent.click(option);

    const nextBtn = screen.getByRole("button", { name: /Next Question/i });
    fireEvent.click(nextBtn);

    expect(
      screen.getByText(
        /How long does it take for a plastic bottle to decompose/i
      )
    ).toBeInTheDocument();
  });

  test("displays infographic and updates every 8 seconds", () => {
    expect(screen.getByText(/Waste Composition/i)).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(8000); // next infographic
    });

    expect(screen.getByText(/Plastic Impact/i)).toBeInTheDocument();
  });

  test("renders action buttons and links", () => {
    expect(
      screen.getByRole("button", { name: /Schedule Pickup/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Report Issues/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Join Community/i })
    ).toBeInTheDocument();
  });
});
