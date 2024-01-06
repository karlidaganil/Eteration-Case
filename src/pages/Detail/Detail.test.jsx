import { expect, test } from "vitest";
import { render } from "@testing-library/react";

import Detail from "./Detail";

test("renders Detail component correctly", () => {
  const { container } = render(<Detail />);
  expect(container).toMatchSnapshot();
});
