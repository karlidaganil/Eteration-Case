import { expect, test } from "vitest";
import { render } from "@testing-library/react";

import Box from "./Box";

test("renders Box component correctly", () => {
  const { container } = render(<Box />);
  expect(container).toMatchSnapshot();
});
