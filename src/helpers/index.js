const checkStringColor = (stringColor) => {
  const styleColor = new Option().style;
  styleColor.color = stringColor;

  return styleColor.color === stringColor ? stringColor : "";
};

const removeSpecialCharacters = (string) => {
  return string.replace(/[^a-zA-Z0-9]/g, "");
};

const capitalizeSentence = (sentence) => {
  // used to check and find complete sentences.
  const regEx = /(^\w{1}|\.\s*\w{1})/gi;
  return sentence.replace(regEx, function (toReplace) {
    return toReplace.toUpperCase();
  });
};

export { checkStringColor, removeSpecialCharacters, capitalizeSentence };
