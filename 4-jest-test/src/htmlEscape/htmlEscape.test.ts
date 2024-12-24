import { escape, unescape } from "./htmlEscape";

describe("htmlEscape test", () => {
  describe("escape 함수 테스트", () => {
    it.each([
      ["&", "&amp;"],
      ["<", "&lt;"],
      [">", "&gt;"],
      ['"', "&quot;"],
      ["'", "&#39;"],
    ])("문자 %s에 대해서 escape %s 한다", (input, expected) => {
      expect(escape(input)).toBe(expected);
    });

    it.only("빈 문자열을 넣으면 빈 문자열이 반환된다.", () => {
      // arrage
      const input = "";
      const expected = "";

      // act
      const actual = escape(input);

      // assert
      expect(actual).toBe(expected);
    });

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
