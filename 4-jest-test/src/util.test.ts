// test에 대한 제목, 실제 테스트 코드 내용

import { toUpperCase } from "./util";

describe("toUpperCase 테스트", () => {
  it("소문자를 넣으면 대문자로 변환된다", () => {
    // Arrange
    const input = "leesumin";
    const output = "LEESUMIN";

    // Act
    // actual: 실제로 함수를 호출한 결과
    const actual = toUpperCase(input);

    // Assert 실제로 나온 값 === 에상 값
    // 뒤 메서드들을 matcher라고 한다
    expect(actual).toBe(output);
  });

  // 실패하는 케이스
  it("소문자를 넣으면 대문자로 변환한다", () => {
    //Arrange
    const param = "abc";
    const output = "abc";

    // Act
    const actual = toUpperCase(param);

    // Assert
    expect(actual).not.toBe(output);
  });

  it("특수문자를 넣으면 특수문자가 리턴되어야 한다.", () => {
    //Arrange
    const param = "$%^";

    // Act
    const actual = toUpperCase(param);

    // Assert
    expect(actual).toBe(param);
  });

  it("빈 문자열을 넣으면 빈 문자열을 반환한다.", () => {
    // Arrange
    const param = "";

    // Act, Assert
    expect(() => toUpperCase(param)).toThrow();
  });

  // 아래의 테스트 코드는 의미 없는 테스
  it("숫자를 넣으면 숫자가 리턴되어야 한다 .", () => {});
  it("숫자 + 소문자를 넣으면 숫자 + 소문자가 리턴되어야 한다.", () => {});
  it("숫자 + 대문자를 넣으면 숫자 + 대문자가 리턴되어야 한다.", () => {});
});

// ex) Form 관련 테스트
// Form의 요소: name input, email input, submit button

// It 두번째 인자로 넣는 function에서 실제 테스트 진행
describe("Form 테스트", () => {
  it("name input에 텍스트를 입력하면 name에 텍스트값이 있어야합니다.", () => {
    // Arrange
    // 테스트에 필요한 파라미터, 예상값 등 테스트에 필요한 데이터 정의
    // Act
    // 테스트 대상 함수 호출
    // Assert
    // 테스트 결과 검증
  });

  it("email input test..", () => {});
  it("submit button test..", () => {});
});
