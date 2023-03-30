import { render, RenderResult } from "@testing-library/react";
import Home from "./Home";
import { useResizeObserverMock } from "../../hooks/useResizeObserverMock";

describe("Home component tests", () => {
  let component: RenderResult;

  useResizeObserverMock();

  beforeEach(() => {
    component = render(<Home data={[]} types={[]} />);
  });

  it("should render component", () => {
    expect(component).toBeTruthy();
  });
});
