import { expect, test } from "vitest";
import { render } from "@testing-library/react";

import Filters from "./Filters";

test("renders Filters component correctly", () => {
  const { container } = render(<Filters />);
  expect(container).toMatchSnapshot();
});
