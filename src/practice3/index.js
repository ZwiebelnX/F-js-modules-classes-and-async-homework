export const getPoetry = async () => {
  const response = await fetch("https://v1.jinrishici.com/all.json");
  const data = await response.json();
  const result = [];
  result.push(data.origin);
  result.push(data.author);
  result.push(data.content);
  return result;
};
