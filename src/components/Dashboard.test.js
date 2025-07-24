import React from "react";
import { render, screen, within, cleanup } from "@testing-library/react";
import Dashboard from "./Dashboard";

beforeEach(() => {
  localStorage.setItem(
    "pickupRequests",
    JSON.stringify([
      { name: "Alice", status: "completed", date: "2024-05-10" },
      { name: "Bob", status: "missed", date: "2024-05-11" },
      { name: "Carol", status: "missed", date: "2024-06-01" },
    ])
  );

  localStorage.setItem(
    "blogPosts",
    JSON.stringify([
      { author: "Alice", title: "Clean City Tips" },
      { author: "Bob", title: "Waste Management" },
    ])
  );

  localStorage.setItem(
    "communityPosts",
    JSON.stringify([{ user: "Carol", content: "Let’s organize a cleanup!" }])
  );
});

afterEach(cleanup);

test("renders dashboard heading", () => {
  render(<Dashboard />);
  expect(screen.getByText("Dashboard Analytics")).toBeInTheDocument();
});

test("displays correct total requests count", () => {
  render(<Dashboard />);
  const requestsSection = screen.getByText("Total Requests").closest("div");
  expect(within(requestsSection).getByText("3")).toBeInTheDocument();
});

test("displays correct missed pickups count", () => {
  render(<Dashboard />);
  const missedSection = screen.getByText("Missed Pickups").closest("div");
  expect(within(missedSection).getByText("2")).toBeInTheDocument();
});

test("displays correct blog posts and community posts count", () => {
  render(<Dashboard />);
  expect(screen.getByText("Blog Posts").nextSibling.textContent).toBe("2");
  expect(screen.getByText("Community Posts").nextSibling.textContent).toBe("1");
});

test("renders bar chart and leaderboard", () => {
  render(<Dashboard />);
  expect(screen.getByText("Requests Per Month")).toBeInTheDocument();
  expect(screen.getByText("Top Users (Activity)")).toBeInTheDocument();
});
