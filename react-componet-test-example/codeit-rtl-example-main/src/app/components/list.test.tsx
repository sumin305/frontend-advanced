import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import { List } from "./list";
import { TODO } from "./types";
import * as StorageAPI from "../libs/storage-api";
import userEvent from "@testing-library/user-event";

jest.mock("../libs/storage-api");
describe("list test", () => {
  const todos: TODO[] = [
    {
      id: 1,
      done: false,
      todo: "first todo",
    },
    {
      id: 2,
      done: true,
      todo: "second todo",
    },
    {
      id: 3,
      done: false,
      todo: "third todo",
    },
  ];

  const User = userEvent.setup();
  const setTodosMock = jest.fn(); // 파라미터로 넘겨줄때

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("update 버튼을 누르면 handleUpdate 함수가 호출되어야 한다.", async () => {
    render(<List setTodos={setTodosMock} todos={todos} />);
    const saveToStorageMock = jest.spyOn(StorageAPI, "saveToStorage");
    const newTodo = todos.map((todo) => {
      if (todo.id === todos[0].id) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    });
  });

  it("delete 버튼을 누르면 handleDelete 함수가 호출되어야 한다.", async () => {
    render(<List setTodos={setTodosMock} todos={todos} />);
    const saveToStorageMock = jest.spyOn(StorageAPI, "saveToStorage");

    // 첫번째 todo를 삭제
    // [button, button]
    const deleteButton = screen.getAllByRole("button", { name: /delete/i })[0];
    await User.click(deleteButton); // 첫번째 todo 데이터 삭제

    expect(setTodosMock).toHaveBeenCalledTimes(1);
    expect(setTodosMock).toHaveBeenCalledWith([todos[1]]);
    expect(saveToStorageMock).toHaveBeenCalled();
    expect(saveToStorageMock).toHaveBeenCalledWith([todos[1]]);
  });

  it("todo가 빈 배열인 경우 ul이 렌더링되고, li는 렌더링되지 않는다.", () => {
    render(<List setTodos={() => {}} todos={[]} />);
    screen.debug();

    const ul = screen.getByRole("list");
    expect(ul).toBeInTheDocument();

    const deleteButton = screen.queryByRole("button", { name: /delete/i });
    expect(deleteButton).not.toBeInTheDocument();
    expect(deleteButton).toBeNull();
  });

  it("list의 todo 각 todo마다 Icons 컴포넌트가 렌더링 되는데, 완료한 todo는 체크 아이콘, 아직 완료하지 않은 todo는 X 아이콘이 렌더링된다.", () => {
    render(<List setTodos={() => {}} todos={todos} />);
    // let doneCount = 0;

    // todos.forEach((todo) => {
    //   if (todo.done) doneCount++;
    // });

    // const checkCircleIconComponents = screen.getAllByLabelText("done");
    // const checkXCircleIconComponents = screen.getAllByLabelText("not-yet");

    // expect(checkCircleIconComponents).toHaveLength(doneCount);
    // expect(checkXCircleIconComponents).toHaveLength(todos.length - doneCount);

    const listItems = screen.getAllByRole("listitem");

    listItems.forEach((item, index) => {
      const icon = within(item).getByLabelText(/done|not-yot/i);
      expect(icon).toHaveAttribute(
        "id",
        todos[index].done ? "done" : "not-yet"
      );
    });

    const notYetTodos = todos.filter((todo) => !todo.done);

    const notYetIcons = screen.queryAllByLabelText(/not-yet/i);
    expect(notYetIcons).toHaveLength(notYetTodos.length);

    const doneTodos = todos.filter((todo) => todo.done);
    const;
  });

  it("todo 상태에 따라서 button의 텍스트가 취소 또는 완료여야한다.", () => {
    render(<List setTodos={() => {}} todos={todos} />);

    const listItems = screen.getAllByRole("listitem");
    screen.debug();

    listItems.forEach((item, index) => {
      // within 해당 element 내부에서 찾는다.
      const button = within(item).getByRole("button", {
        name: /update/i,
      });
      expect(button).toHaveTextContent(todos[index].done ? "취소" : "완료");
    });
  });

  it("list의 todo 각 todo마다 todo 제목이 렌더링된다.", () => {
    render(<List setTodos={() => {}} todos={todos} />);

    const todoTitles = screen.getAllByRole("paragraph");
    let idx = 0;
    todoTitles.forEach((todoTitle) => {
      expect(todoTitle.innerHTML).toEqual(todos[idx++].todo);
    });
  });

  it("todo list의 각 todo마다 update버튼이 렌더링된다.", () => {
    render(<List setTodos={() => {}} todos={todos} />);

    const updateButtons = screen.getAllByLabelText(/update/i);
    expect(updateButtons).toHaveLength(todos.length);
  });

  it("todo list의 각 todo마다 delete버튼이 렌더링된다.", () => {
    render(<List setTodos={() => {}} todos={todos} />);

    const deleteButtons = screen.getAllByText("삭제");
    expect(deleteButtons).toHaveLength(todos.length);
  });
});
