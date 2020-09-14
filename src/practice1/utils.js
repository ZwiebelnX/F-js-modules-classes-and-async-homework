import urlInfo from "./constant";

const getURL = () => `${urlInfo.ADDRESS}:${urlInfo.PORT}${urlInfo.PATH}`;

export const region = urlInfo.REGION;
export default getURL;
