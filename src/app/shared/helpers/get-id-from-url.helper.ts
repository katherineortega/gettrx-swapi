export const getIdFromUrlHelper = (url: string, category: string): string => {
  return url?.split(`${category}`)?.pop()?.replace(/\//g, '') || '';
}


export const getIdsFromListHelper = (list: Array<string>, category: string): Array<string> => {
  return list.length ? list.map((url: string) => getIdFromUrlHelper(url, category)) : [];

}
