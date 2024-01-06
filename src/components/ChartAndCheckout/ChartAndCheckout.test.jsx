import { expect, test } from "vitest";
import { render } from "@testing-library/react";

import ChartAndCheckout from "./ChartAndCheckout";

test("renders ChartAndCheckout component correctly", () => {
  const { container } = render(<ChartAndCheckout />);
  expect(container).toMatchSnapshot();
});
