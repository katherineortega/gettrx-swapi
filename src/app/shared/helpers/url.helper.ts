export class UrlHelper {

  static getIdFromUrl(url: string, category: string): string {
    return url?.split(`${category}`)?.pop()?.replace(/\//g, '') || '';
  }

  static getIdsFromUrlList(list: Array<string>, category: string): Array<string> {
    return list.length ? list.map((url: string) => UrlHelper.getIdFromUrl(url, category)) : [];
  }

}
