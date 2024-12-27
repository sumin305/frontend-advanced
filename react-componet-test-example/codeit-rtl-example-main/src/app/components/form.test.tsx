import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import Form from "./form";
import userEvent, { UserEvent } from "@testing-library/user-event";
import { TODO } from "./types";
import exp from "constants";
describe("form 테스트", () => {
  let User: UserEvent;

  beforeEach(() => {
    screen.debug();
    User = userEvent.setup();
    // render(<Form handleSaveToStorage={jest.fn()} setTodos={jest.fn()} />);
  });

  it("handleAddTodo를 호출했을때 todo가 null이면 setTodos가 호출되지 않는다.", async () => {
    // Arrange
    const setTodosMock = jest.fn();
    render(<Form handleSaveToStorage={jest.fn()} setTodos={setTodosMock} />);

    // Act
    const submitButton = screen.getByRole("button", { name: /create/i });
    await User.click(submitButton);

    // Assert
    expect(setTodosMock).not.toHaveBeenCalled();
  });
  it("생성하기 버튼을 클릭하면 handleAddTodo가 호출되고, setTodos와 handleSaveToStorage가 호출되어야 한다", async () => {
    // Arrage
    const setTodosMock = jest.fn();
    const handleSaveToStorageMock = jest.fn();
    const newTodo: TODO = {
      id: 1,
      todo: "test",
      done: false,
    };

    jest.spyOn(Date.prototype, "getTime").mockReturnValue(newTodo.id);

    render(
      <Form
        handleSaveToStorage={handleSaveToStorageMock}
        setTodos={setTodosMock}
      />
    );

    const input = screen.getByRole("textbox", { name: /todo/i });
    fireEvent.change(input, { target: { value: newTodo.todo } });

    const submitButton = screen.getByRole("button", { name: /create/i });
    await User.click(submitButton);

    // Act
    expect(setTodosMock).toHaveBeenCalledTimes(1);
    expect(handleSaveToStorageMock).toHaveBeenCalledTimes(1);
    expect(handleSaveToStorageMock).toHaveBeenCalledWith(newTodo);
  });
  it("input에 값을 입력하면 value에 값이 있어야한다..", async () => {
    // Arrange
    const setTodoMock = jest.fn();
    render(<Form handleSaveToStorage={jest.fn()} setTodos={setTodoMock} />);
    // {...args: any} => {});

    // Act
    // 1. input 요소를 찾습니다.
    const input = screen.getByLabelText("form-input-todo");

    // await User.click(todoInput);

    // 3. input 요소에 타이핑한다.
    await User.type(input, "test");

    // setTodoMock이 호출되었는지 확인!
    expect(input).toHaveValue("test");
  });

  it("onChange 이벤트가 발생하면, setTodo가 호출되어야 합니다.", async () => {
    // Arrange
    const setTodoMock = jest.fn();
    render(<Form handleSaveToStorage={jest.fn()} setTodos={setTodoMock} />);
    // {...args: any} => {});

    // Act
    // 1. input 요소를 찾습니다.
    const input = screen.getByRole("textbox", { name: /todo/i });

    // 2. input 요소를 클릭한다.
    // await User.click(todoInput);

    // 3. input 요소에 타이핑한다.
    await User.type(input, "test");

    // 4. input 요소를 클릭한다.
    const submitButton = screen.getByRole("button", { name: /create/i });
    await User.click(submitButton);

    // setTodoMock이 호출되었는지 확인!
    expect(setTodoMock).toHaveBeenCalledTimes(1);
  });

  it("form이 렌더링 되어야 합니다", () => {
    render(<Form handleSaveToStorage={jest.fn()} setTodos={jest.fn()} />);
    // form test
    const input = screen.getByLabelText("form-input-todo");
    expect(input).toBeInTheDocument();

    const formByTestId = screen.getByTestId("todo-form");
    expect(formByTestId).toBeInTheDocument();

    const formByTitle = screen.getByTitle("form to create todo");
    expect(formByTitle).toBeInTheDocument();

    const formByQuerySelector = document.querySelector("form");
    expect(formByQuerySelector).toBeInTheDocument();

    const formById = document.getElementById("todo-form");
    expect(formById).toBeInTheDocument();
  });

  it("input이 렌더링 되어야합니다", () => {
    render(<Form handleSaveToStorage={jest.fn()} setTodos={jest.fn()} />);
    const input = screen.getByLabelText("form-input-todo");
    expect(input).toBeInTheDocument();

    const inputByLabel = screen.getByLabelText("입력");
    expect(inputByLabel).toBeInTheDocument();

    const inputByPlaceHoder = screen.getByPlaceholderText(/할 일/i);
    expect(inputByPlaceHoder).toBeInTheDocument();

    const inputByQuerySelector = document.querySelector("form input");
    expect(inputByQuerySelector).toBeInTheDocument();
  });

  it("button이 렌더링되어야합니다.", () => {
    // const button = screen.getByRole("button", { name: "생성하기" });
    // expect(button).toBeInTheDocument();

    const 생성버튼 = document.querySelectorAll("button").forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });
});
