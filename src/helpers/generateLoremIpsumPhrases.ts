/**
 * Generates a random number of lorem ipsum phrases.
 * @param count The number of phrases to generate. Defaults to 1.
 * @example
 * const text = generateLoremIpsumPhrases(3)
 * console.log(text);
 * // Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod massa ac dolor efficitur, id vulputate purus vestibulum. Phasellus auctor, felis quis blandit dignissim, justo tortor mattis nunc, ac interdum velit tortor id justo.
 */
function generateLoremIpsumPhrases(count: number = 1): string {
  const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod massa ac dolor efficitur, id vulputate purus vestibulum.   Phasellus auctor, felis quis blandit dignissim, justo tortor mattis nunc, ac interdum velit tortor id justo. Vivamus a nulla non neque vestibulum   feugiat a eu leo. Sed a dolor eu nulla efficitur sollicitudin. Sed facilisis, urna vel suscipit vulputate, odio libero congue libero, eget fermentum odio nte non ante. Maecenas et lectus arcu. Donec et fermentum odio. Suspendisse ultrices arcu in libero convallis, a tristique tellus aliquam. Quisque bibendum vulputate suscipit. Duis sollicitudin vulputate odio non lacinia.`;

  const phrases = loremIpsum.split('.').map(phrase => phrase.trim());
  let randomPhrases: string[] = [];

  if (count === 1) {
    randomPhrases = [phrases[0]];
  } else {
    randomPhrases = phrases.slice(0, count);
  }

  return randomPhrases.join('. ');
}

export default generateLoremIpsumPhrases;
