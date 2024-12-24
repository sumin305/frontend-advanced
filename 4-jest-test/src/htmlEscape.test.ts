import { escape, unescape } from "./htmlEscape";

describe("htmlEscape test", () => {
  describe("escape 함수 테스트", () => {
    it("html이 없는 문장이 들어오면 그대로 반환한다.", () => {
      // arrage
      const input = `fred, barney, pebbles`;
      const expected = `fred, barney, pebbles`;

      // act
      const actual = escape(input);

      // assert
      expect(actual).toBe(expected);
    });

    it("& 테스트", () => {
      // arrage
      const input = "fred, barney, & pebbles";
      const expected = "fred, barney, &amp; pebbles";

      // act
      const actual = escape(input);

      // assert
      expect(actual).toBe(expected);
    });

    it("<> 테스트", () => {
      // arrage
      const input = "<fred, barney, pebbles>";
      const expected = "&lt;fred, barney, pebbles&gt;";

      // act
      const actual = escape(input);

      // assert
      expect(actual).toBe(expected);
    });

    it(`" 테스트`, () => {
      // arrage
      const input = `fred, barney, "pebbles"`;
      const expected = `fred, barney, &quot;pebbles&quot;`;

      // act
      const actual = escape(input);

      // assert
      expect(actual).toBe(expected);
    });

    it(`' 테스트`, () => {
      // arrage
      const input = `fred, barney, 'pebbles'`;
      const expected = `fred, barney, &#39;pebbles&#39;`;

      // act
      const actual = escape(input);

      // assert
      expect(actual).toBe(expected);
    });
  });

  describe("unescape 함수 테스트", () => {
    it("html이 없는 문장이 들어오면 그대로 반환한다.", () => {
      // arrage
      const input = `fred, barney, pebbles`;
      const expected = `fred, barney, pebbles`;

      // act
      const actual = unescape(input);

      // assert
      expect(actual).toBe(expected);
    });

    it("unescape 함수 & 테스트", () => {
      // arrage
      const input = "fred, barney, &amp; pebbles";
      const expected = "fred, barney, & pebbles";

      // act
      const actual = unescape(input);

      // assert
      expect(actual).toBe(expected);
    });

    it("unescape 함수 <> 테스트", () => {
      // arrage
      const input = "&lt;fred, barney, pebbles&gt;";
      const expected = "<fred, barney, pebbles>";

      // act
      const actual = unescape(input);

      // assert
      expect(actual).toBe(expected);
    });

    it(`unescape 함수 " 테스트`, () => {
      // arrage
      const input = `fred, barney, &quot;pebbles&quot;`;
      const expected = `fred, barney, "pebbles"`;

      // act
      const actual = unescape(input);

      // assert
      expect(actual).toBe(expected);
    });

    it(`unescape 함수 ' 테스트`, () => {
      // arrage
      const input = `fred, barney, &#39;pebbles&#39;`;
      const expected = `fred, barney, 'pebbles'`;

      // act
      const actual = unescape(input);

      // assert
      expect(actual).toBe(expected);
    });
  });
});
