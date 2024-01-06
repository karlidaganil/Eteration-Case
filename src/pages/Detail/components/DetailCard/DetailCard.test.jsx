import { expect, test } from "vitest";
import { render } from "@testing-library/react";

import DetailCard from "./DetailCard";

test("renders DetailCard component correctly", () => {
  const { container } = render(<DetailCard />);
  expect(container).toMatchSnapshot();
});
