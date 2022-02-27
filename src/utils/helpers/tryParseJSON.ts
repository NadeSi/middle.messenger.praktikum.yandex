export function tryParseJSON(jsonString: string) {
  try {
    const str = JSON.parse(jsonString);

    if (str && typeof str === 'object') {
      return str;
    }
  } catch (e) {}

  return false;
}
