import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'chars', standalone: true })
export class CharsPipe implements PipeTransform {
  transform(value: number): Iterable<string> {
    const chars = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
    ];
    const iterable = <Iterable<string>>{};
    iterable[Symbol.iterator] = function* () {
      let n = 0;
      while (n < value) {

        yield chars[n++].toUpperCase();
      }
    };
    return iterable;
  }
}
