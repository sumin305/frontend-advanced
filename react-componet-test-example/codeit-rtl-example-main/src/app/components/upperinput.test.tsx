import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import userEvent, { UserEvent } from "@testing-library/user-event";
import UpperInput from "./upperinput";

describe("Upper Input test", () => {
  let User = userEvent.setup();
  beforeEach(() => {
    render(<UpperInput />);
  });

  it("upper label이 렌더링된다", () => {
    const label = screen.getByText("Upper");
    expect(label).toBeInTheDocument();
  });

  it("input이 렌더링된다", () => {
    const input = document.getElementById("upper");
    expect(input).toBeInTheDocument();
  });

  it("input에 문자를 입력하면 대문자로 변환된다.", async () => {
    const input = document.getElementById("upper");
    const testStr = "stuff";
    await User.type(input as Element, testStr);

    const inputText = input?.getAttribute("value");
    expect(inputText).toBe(testStr.toUpperCase());
  });
});
