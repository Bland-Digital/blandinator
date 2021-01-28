import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./component/App";

const clickButton = (buttonName) => {
  screen.getByRole("button", { name: buttonName }).click();
};

test("1 add 1 equals 2", async () => {
  jest.spyOn(window, "fetch");
  const dom = render(<App />);
  var componentDisplay = dom.container.getElementsByClassName(
    "component-display",
  )[0].children[0];

  expect(componentDisplay.innerHTML).toBe("0");
  clickButton("1");
  expect(componentDisplay.innerHTML).toBe("1");
  clickButton("+");
  clickButton("1");
  clickButton("=");
  expect(componentDisplay.innerHTML).toBe("2");
});

test("1 add 2 equals 3", async () => {
  jest.spyOn(window, "fetch");
  const dom = render(<App />);
  var componentDisplay = dom.container.getElementsByClassName(
    "component-display",
  )[0].children[0];

  expect(componentDisplay.innerHTML).toBe("0");
  clickButton("1");
  expect(componentDisplay.innerHTML).toBe("1");
  clickButton("+");
  clickButton("2");
  clickButton("=");
  expect(componentDisplay.innerHTML).toBe("2");
});
