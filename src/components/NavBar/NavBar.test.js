import { render } from "@testing-library/react";
import NavBar from "./NavBar";

test("The NavBar component should render", () => {
  const view = render(<NavBar />);
  expect(view).toMatchSnapshot();
});
