function AOrAnd({ firstLetter }) {
  return firstLetter === "a" ||
    firstLetter === "e" ||
    firstLetter === "i" ||
    firstLetter === "o" ||
    firstLetter === "u"
    ? "an"
    : "a";
}

export default AOrAnd;
