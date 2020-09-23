import urlInfo from "./constant";

const getURL = () => `${urlInfo.ADDRESS}:${urlInfo.PORT}${urlInfo.PATH}`;

// TODO feedback：utils里面的内容尽量都用export导出
export const region = urlInfo.REGION;
export default getURL;
