import { expect, test } from "vitest";
import { render } from "@testing-library/react";

import List from "./List";

test("renders List component correctly", () => {
  const { container } = render(<List />);
  expect(container).toMatchSnapshot();
});
