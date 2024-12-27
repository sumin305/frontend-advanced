import shuffle from "./shuffle";

describe("shuffle 함수 테스트", () => {
  beforeEach(() => {
    const mockingFn = jest.spyOn(global.Math, "random");
    mockingFn.mockReturnValue(0.5);
  });

  afterEach(() => {
    jest.spyOn(global.Math, "random").mockRestore();
  });

  it("shuffle을 실행하면 원본 배열과 다르다.", () => {
    // arrange
    const array = [1, 2];

    // act
    const actual = shuffle(array);

    // assert
    expect(actual).not.toEqual(array);
  });

  it("shuffle을 실행하면 원본 배열과 길이가 같다.", () => {
    // arrange
    const array = [1, 2];

    // act
    const actual = shuffle(array);

    // assert
    expect(actual).toHaveLength(2);
  });

  it("shuffle을 실행하면 원본 배열의 원소를 모두 포함한다.", () => {
    // arrange
    const array = [1, 2];

    // act
    const actual = shuffle(array);

    // assert
    array.forEach((value) => {
      expect(actual).toContain(value);
    });
  });

  it("배열이 null일 경우, 빈 배열을 반환한다.", () => {
    // arrange
    const array = null;

    // act
    const actual = shuffle(array as any);

    // assert
    expect(actual).toEqual([]);
  });

  it("배열의 길이가 0일 경우, 빈 배열을 반환한다.", () => {
    // arrange
    const array = [];

    // act
    const actual = shuffle(array as any);

    // assert
    expect(actual).toEqual([]);
  });

  it("배열의 원소가 하나 있을 때 그대로 반환한다.", () => {
    // arrange
    const array = [1];

    // act
    const actual = shuffle(array);

    // assert
    expect(actual).toEqual([1]);
  });
});
