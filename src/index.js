import "./styles.css";

import { countAnagrams } from "./anagrams.js";

console.log(`Test results:`);

const testCases = [
  { text: "abc", word: "d", expected: 0 },
  { text: "abacadabda", word: "ab", expected: 3 },
  { text: "abacadabaadaab", word: "aba", expected: 4 },
  { text: "abcba", word: "abc", expected: 2 }
];

let out = "";

testCases.forEach(({ text, word, expected }, idx) => {
  const result = countAnagrams(text, word);
  const ok = result === expected;
  const log = ok ? console.log : console.error;

  const str = `Test ${idx}: expected = ${expected}, actual = ${result}`;

  log(str);

  out += `\t${ok ? "✔" : "✖"} ${str}\n`;
});

document.getElementById("app").innerHTML = `
<h1>Find Anagrams!</h1>
<pre>
Test results:
${out}
</pre>
`;
