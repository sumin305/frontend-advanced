import React from "react";

export const Role: React.FC = () => {
  // ARIA Roles -> 각 html 요소들은 aria-role을 가지고 있음
  // 웹 접근성을 위해 ..

  return (
    <div>
      <a href="/link">{"link"}</a>
      <button>{"button"}</button>
      <footer>{"footer"}</footer>
      <h1>{"에이치원"}</h1>
      <h2>{"h2"}</h2>
      <h3>{"h3"}</h3>
      <header>{"header"}</header>
      <img src="/img" aria-label="첫번째 이미지" alt="img" />
      <img src="/img" aria-label="두번째 이미지" alt="img" />

      {"image"}
      <input type="text" />
      {"input"}
      <input type="checkbox" />
      {"checkbox"}
      <input type="number" />
      {"number"}
      <input type="radio" />
      {"radio"}
      <ul>
        <li>Red</li>
        <li>{"Blue"}</li>
        <li>{"Green"}</li>
      </ul>
    </div>
  );
};
