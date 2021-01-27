import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./component/App";

test("successful login", async () => {
  jest.spyOn(window, "fetch");
  const dom = render(<App />);
  const clickButton = (buttonName) => {
    screen.getByRole("button", { name: buttonName }).click();
  };
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
