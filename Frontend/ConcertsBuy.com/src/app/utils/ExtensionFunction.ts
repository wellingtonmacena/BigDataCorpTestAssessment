export function skip(array: any[], skipCount: number) {
  return array.splice(0, skipCount);
}

export function take(array: any[], takeNumber: number) {
  return array.slice(0, takeNumber);
}

export function chunk(array: any[], chunkSize: number):any[][] {
  let chunks = [];

  for (let index = 0; index < array.length; index += chunkSize) {
    chunks.push(array.slice(index, index + chunkSize));
  }

  return chunks;
}
