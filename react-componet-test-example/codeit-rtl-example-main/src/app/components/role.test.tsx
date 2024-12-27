import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Role } from "./role";

describe("Role Test Suite", () => {
  it("role 별로 요소 찾아보기", () => {
    render(<Role />);

    const a = screen.getByRole("link");
    expect(a).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();

    // level은 h tag 한정
    // name은 요소 내 들어간 텍스트 혹은 라벨
    const h1ByLevel = screen.getByRole("heading", { level: 1 });
    const h1ByName = screen.getByRole("heading", { name: "에이치원" });
    const h1ByText = screen.getByText("에이치원");

    expect(h1ByLevel).toBeInTheDocument();
    expect(h1ByName).toBeInTheDocument();
    expect(h1ByText).toBeInTheDocument();

    // header
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();

    // img
    // 같은 요소가 두 개 이상이라면 aria-label 활용
    const img1 = screen.getByRole("img", { name: "첫번째 이미지" });
    const img2 = screen.getByRole("img", { name: "두번째 이미지" });
    expect(img1).toBeInTheDocument();
    expect(img2).toBeInTheDocument();

    // input
    // input type이 다르면 role이 달라진다
    const inputText = screen.getByRole("textbox");
    const inputCheckbox = screen.getByRole("checkbox");
    const inputNumber = screen.getByRole("spinbutton");
    const inputRadio = screen.getByRole("radio");

    // ul
    const ul = screen.getByRole("list");
    const li = screen.getAllByRole("listitem");

    // li
    // const listItem = screen.getByRole("listitem", { name: "Red" });
    // debug
    // screen.debug() -> render된 component를 console.log()로 출력
    screen.debug();
  });
});
