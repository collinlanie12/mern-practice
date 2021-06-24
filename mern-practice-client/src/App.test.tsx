import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import { Navbar } from "./app/components/navbar";

test("render navbar", () => {
  render(<Navbar />);

  expect(screen.getByText(/Services/)).toBeInTheDocument();
});
