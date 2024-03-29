import React from "react";
import { render, RenderResult } from "@testing-library/react";

import App from "./App";
import { useResizeObserverMock } from "./hooks/useResizeObserverMock";

describe("Home component tests", () => {
  let component: RenderResult;
  useResizeObserverMock();

  beforeEach(() => {
    component = render(<App />);
  });

  it("renders learn react link", () => {
    expect(component).toBeTruthy();
  });
});
