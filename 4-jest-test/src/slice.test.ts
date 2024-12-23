import slice from "./slice";

describe("slice 함수 테스트", () => {
  it("배열과 start, end값을 입력할 경우, start index부터 end index - 1까지 잘라진 배열을 반환한다.", () => {
    // arrange
    const array = [1, 2, 3, 4];
    const start = 1;
    const end = 3;

    // act
    const actual = slice(array, start, end);

    // assert
    expect(actual).toEqual([2, 3]);
  });

  it("배열의 길이가 0일 경우 빈 배열을 반환한다.", () => {
    // arrange
    const array = [];

    // act
    const actual = slice(array, 0, array.length);

    // assert
    expect(actual).toEqual([]);
  });

  it("start가 null이고 end가 undefined일 경우 처음부터 끝까지 원소를 반환한다.", () => {
    // arrange
    const array = [1, 2, 3, 4];

    // act
    const actual = slice(array);

    // assert
    expect(actual).toEqual(array);
  });

  it("end null일 경우 마지막 원소까지 자른다.", () => {
    // arrange
    const array = [1, 2, 3, 4];
    const first = 2;

    // act
    const actual = slice(array, first);

    // assert
    expect(actual).toEqual([3, 4]);
  });

  it("start가 음수이면서 절대값이 배열의 크기보다 작은 경우, start값은 start와 배열의 크기를 합한 값이다.", () => {
    // arrange
    const array = [1, 2, 3, 4];
    const first = -2;
    const end = array.length;

    // act
    const actual = slice(array, first, end); // 4 - 2 = index 2부터 시작

    // assert
    expect(actual).toEqual([3, 4]);
  });

  it("start가 음수이면서 절대값이 배열의 크기보다 큰 경우, start값은 0이다", () => {
    // arrange
    const array = [1, 2, 3, 4];
    const first = -5;
    const end = array.length;

    // act
    const actual = slice(array, first, end);

    // assert
    expect(actual).toEqual([1, 2, 3, 4]);
  });

  it("end가 배열의 크기보다 큰 경우, end값은 배열의 크기이다.", () => {
    // arrange
    const array = [1, 2, 3, 4];
    const start = 2;
    const end = 5;

    // act
    const actual = slice(array, start, end);

    // assert
    expect(actual).toEqual([3, 4]);
  });

  it("end가 음수일 경우, end값은 end와 배열의 크기를 합한 값이다.", () => {
    // arrange
    const array = [1, 2, 3, 4];
    const start = 0;
    const end = -2;

    // act
    const actual = slice(array, start, end);

    // assert
    expect(actual).toEqual([1, 2]);
  });
});
