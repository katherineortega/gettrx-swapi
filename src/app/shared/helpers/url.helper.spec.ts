import { UrlHelper } from "@helpers/url.helper";

describe('UrlHelper', () => {
  it('should get string from url, getIdFromUrl(url: string, category: string)', () => {
    const mockedData = {url: 'http://localhost:8080/category/id', category: 'category'};
    const expectedResult = 'id';
    const result = UrlHelper.getIdFromUrl(mockedData.url, mockedData.category);
    expect(result).toEqual(expectedResult);
  });
});
