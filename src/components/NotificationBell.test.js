import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import NotificationBell from "./NotificationBell";

// Sample notifications to test with
const SAMPLE_NOTIFICATIONS = [
  {
    text: "Your waste pickup is scheduled for tomorrow.",
    time: "10:00 AM",
    read: false,
  },
  {
    text: "New schedule available for your area.",
    time: "2:00 PM",
    read: false,
  },
];

// Mock localStorage key used in the component
const LS_NOTIFICATIONS = "ccNotifications";

beforeEach(() => {
  // Store sample notifications before rendering the component
  localStorage.setItem(LS_NOTIFICATIONS, JSON.stringify(SAMPLE_NOTIFICATIONS));
  render(<NotificationBell />);
});

afterEach(() => {
  cleanup();
  localStorage.clear();
});

describe("NotificationBell Component", () => {
  test("renders the notification bell icon", () => {
    expect(
      screen.getByRole("button", { name: /unread notifications/i })
    ).toBeInTheDocument();
  });

  test("toggles dropdown when bell is clicked", () => {
    const bellButton = screen.getByRole("button", {
      name: /unread notifications/i,
    });
    fireEvent.click(bellButton);

    expect(screen.getByText(/Notifications/i)).toBeInTheDocument();
  });

  test("displays sample notifications", () => {
    const bellButton = screen.getByRole("button", {
      name: /unread notifications/i,
    });
    fireEvent.click(bellButton);

    // Confirm both sample notifications are visible
    expect(
      screen.getByText(/Your waste pickup is scheduled for tomorrow/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/New schedule available for your area/i)
    ).toBeInTheDocument();
  });

  test("clears notifications when 'Clear All' is clicked", () => {
    const bellButton = screen.getByRole("button", {
      name: /unread notifications/i,
    });
    fireEvent.click(bellButton);

    const clearBtn = screen.getByText(/Clear All/i);
    fireEvent.click(clearBtn);

    // Reopen dropdown to check for 'No notifications'
    fireEvent.click(bellButton);
    expect(screen.getByText(/No notifications/i)).toBeInTheDocument();
  });
});
