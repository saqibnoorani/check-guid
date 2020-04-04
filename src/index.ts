export function isGuid(obj: string): boolean {
  if (obj.substr(0, 23) == '00000000-0000-0000-0000') {
      return true;
  }
  // tslint:disable-next-line:max-line-length
  const guidRegEx: RegExp = new RegExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
  return guidRegEx.test(obj);
}