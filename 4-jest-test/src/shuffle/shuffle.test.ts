import shuffle from "./shuffle";

describe("shuffle 함수 테스트", () => {
  it("배열이 주어지면 해당 배열을 섞어서 반환한다.", () => {
    // arrange
    const array = [1, 2, 3, 4];

    // act
    const actual = shuffle(array);

    // assert
    expect(actual).not.toEqual(array);
    expect(actual).toHaveLength(4);
    expect(actual).toContain(1);
    expect(actual).toContain(2);
    expect(actual).toContain(3);
    expect(actual).toContain(4);
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
