import React from "react";
import { render } from "@testing-library/react";

import App from ".";

test("check for the users list heading", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Users List/i);
  expect(linkElement).toBeInTheDocument();
});
