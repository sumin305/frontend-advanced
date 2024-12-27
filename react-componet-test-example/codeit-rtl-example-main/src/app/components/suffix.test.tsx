import "@testing-library/jest-dom";
import { Suffix } from "./suffix";
import { screen, render } from "@testing-library/react";
describe("Suffix Test Suite", () => {
  it("Suffix Test", () => {
    render(<Suffix />);

    screen.debug();
    const h3 = screen.getByText("Data Input");
    expect(h3).toBeInTheDocument();

    const imgWrapper = screen.getByTestId("codeit-img-wrapper");
    expect(imgWrapper).toBeInTheDocument();
  });

  const imgElement = screen.getByRole("img", { name: "codeit-img" });
  expect(imgElement).toBeInTheDocument();

  // img => getByAltText 사용 가능
  const imgByAltText = screen.getByAltText("codeit-img");
  expect(imgByAltText).toBeInTheDocument();

  // label은 role이 없음 => getByLabelText 사용
  const label = screen.getByLabelText("email");
  expect(label).toBeInTheDocument();

  const inputByLabel = screen.getByLabelText("email");
  expect(inputByLabel).toBeInTheDocument();

  const inputByDisplayValue = screen.getByDisplayValue("hello");
  expect(inputByDisplayValue).toBeInTheDocument();

  const inputByPlaceHoder = screen.getByPlaceholderText("type color");
  expect(inputByPlaceHoder).toBeInTheDocument();

  const buttonByTitle = screen.getByTitle(/click/i);
  expect(buttonByTitle).toBeInTheDocument();

  const button = document.querySelector("form button");
  expect(button).toHaveTextContent("submit");
});
