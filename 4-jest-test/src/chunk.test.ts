import chunk from "./chunk";

describe("chunk teset", () => {
  it("size 음수값을 넣으면 0이 된다.", () => {
    // arrange
    const array = [1, 2, 3, 4];
    const size = -2;

    // act
    const actual = chunk(array, size);

    // assert
    expect(actual).toEqual([]);
  });

  it("size 빈 값이면 1로 한다.", () => {
    // arrange
    const array = [1, 2, 3, 4];

    // act
    const actual = chunk(array);

    // assert
    expect(actual).toEqual([[1], [2], [3], [4]]);
  });

  it("array가 null일 경우, 빈 배열을 반환한다.", () => {
    // arrange
    const array = null;
    const size = 1;

    // act
    const actual = chunk(array as any, size);

    // assert
    expect(actual).toEqual([]);
    expect(actual).toHaveLength(0);
  });

  it("array가 빈 배열이라면 빈 배열을 반환한다.", () => {
    // arrange
    const array = [];

    // act
    const actual = chunk(array);

    // assert
    expect(actual).toEqual([]);
  });

  it("반환되는 배열의 크기는 (입력하는 배열의 크기 / size) 를 올림한 값이다.", () => {
    // arrange
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const size = 3;

    // act
    const actual = chunk(array, size);

    // assert
    expect(actual).toHaveLength(3);
  });

  it("반환되는 배열의 크기는 (입력하는 배열의 크기 / size) 를 올림한 값이다.", () => {
    // arrange
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const size = 3;

    // act
    const actual = chunk(array, size);

    // assert
    expect(actual).toHaveLength(4);
  });

  it("chunk 함수는 배열을 size의 길이를 가진 그룹으로 분할한다.", () => {
    // arrange
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const size = 3;

    // act
    const actual = chunk(array, size);

    expect(actual).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11],
    ]);
  });

  it("chunk 함수는 배열을 size의 길이를 가진 그룹으로 분할한다.", () => {
    // arrange
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const size = 4;

    // act
    const actual = chunk(array, size);

    expect(actual).toEqual([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ]);
  });

  it("slice가 실수일 경우에는 버림을 한다", () => {
    // arrange
    const array = [1, 2, 3, 4];
    const size = 1.5;

    // act
    const actual = chunk(array, size);
    console.log(actual);
    // assert
    expect(actual).toEqual([[1], [2], [3], [4]]);
  });
});
