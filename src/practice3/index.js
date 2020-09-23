export const getPoetry = async () => {
  // TODO feedback：url可以抽成变量
  const response = await fetch("https://v1.jinrishici.com/all.json");
  const data = await response.json();

  // TODO feedback: 可以用ES6解构
  const result = [];
  result.push(data.origin);
  result.push(data.author);
  result.push(data.content);
  return result;
};
