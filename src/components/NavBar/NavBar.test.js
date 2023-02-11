import { render } from "@testing-library/react";
import NavBar from "./NavBar";

test("The NavBar component should render with a title", () => {
  const view = render(<NavBar title="Test Application #2" />);

  expect(view).toMatchSnapshot();
});
