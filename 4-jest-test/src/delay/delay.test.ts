import delay from "./delay";

describe("delay 함수 테스트", () => {
  it("함수를 인자로 넘기지 않을 경우 에러가 발생한다", () => {
    const func = "function";
    expect(() => delay(func as any)).toThrow;
  });

  // 함수를 넘길 경우, wait 시간 뒤에 호출된다.
  it("함수를 인자로 넘기지 않을 경우 에러가 발생한다", () => {
    const func = () => {
      console.log("delay test");
    };
    expect(() => delay(func as any)).toThrow;
  });

  it("특정 시간 지나지 않으면 callback 함수를 실행하지 않는다.", (done) => {
    let actual = true;
    delay(() => {
      console.log("10ms 지남");
      actual = false;
    }, 10);

    setTimeout(() => {
      console.log("2ms 지남");
      expect(actual).toBeTruthy();
      done();
    }, 2);
  });

  it("특정 시간이 지나면 callback 함수를 실행한다", (done) => {
    let actual = true;
    delay(() => {
      actual = false;
    }, 10);

    setTimeout(() => {
      expect(actual).not.toBeTruthy();
      done();
    }, 15);
  });
});
