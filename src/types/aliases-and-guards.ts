/**
   * MIT License

  Copyright (c) 2016 Piotr Witek <piotrek.witek@gmail.com> (http://piotrwitek.github.io)

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
 */
/**
 * Primitive
 * @desc Type representing [`Primitive`](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) types in TypeScript: `string | number | bigint | boolean |  symbol | null | undefined`
 * @example
 *   type Various = number | string | object;
 *
 *    // Expect: object
 *   type Cleaned = Exclude<Various, Primitive>
 */
export type Primitive =
  | string
  | number
  | bigint
  | boolean
  | symbol
  | null
  | undefined;

/**
 * Falsy
 * @desc Type representing falsy values in TypeScript: `false | "" | 0 | null | undefined`
 * @example
 *   type Various = 'a' | 'b' | undefined | false;
 *
 *   // Expect: "a" | "b"
 *   Exclude<Various, Falsy>;
 */
export type Falsy = false | '' | 0 | null | undefined;

/**
 * Nullish
 * @desc Type representing [nullish values][https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing] in TypeScript: `null | undefined`
 * @example
 *   type Various = 'a' | 'b' | undefined;
 *
 *   // Expect: "a" | "b"
 *   Exclude<Various, Nullish>;
 */
export type Nullish = null | undefined;

/**
 * Tests for one of the [`Primitive`](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) types using the JavaScript [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) operator
 *
 * Clarification: TypeScript overloads this operator to produce TypeScript types if used in context of types.
 *
 * @param val The value to be tested
 * @returns If `val` is primitive. If used in the flow of the program typescript will infer type-information from this.
 *
 * @example
 *   const consumer = (value: Primitive | Primitive[]) => {
 *       if (isPrimitive(value)) {
 *           return console.log('Primitive value: ', value);
 *       }
 *       // type of value now inferred as Primitive[]
 *       value.map((primitive) => consumer(primitive));
 *   };
 */
export const isPrimitive = (val: unknown): val is Primitive => {
  if (val === null || val === undefined) {
    return true;
  }
  switch (typeof val) {
    case 'string':
    case 'number':
    case 'bigint':
    case 'boolean':
    case 'symbol': {
      return true;
    }
    default:
      return false;
  }
};

/**
 * Tests for Falsy by simply applying negation `!` to the tested `val`.
 *
 * The value is mostly in added type-information and explicity,
 * but in case of this simple type much the same can often be archived by just using negation `!`:
 * @example
 *   const consumer = (value: boolean | Falsy) => {
 *     if (!value) {
 *         return ;
 *     }
 *     type newType = typeof value; // === true
 *     // do stuff
 *   };
 */
export const isFalsy = (val: unknown): val is Falsy => !val;

/**
 * Tests for Nullish by simply comparing `val` for equality with `null`.
 * @example
 *   const consumer = (param: Nullish | string): string => {
 *     if (isNullish(param)) {
 *       // typeof param === Nullish
 *       return String(param) + ' was Nullish';
 *     }
 *     // typeof param === string
 *     return param.toString();
 *   };
 */
export const isNullish = (val: unknown): val is Nullish => val == null;
