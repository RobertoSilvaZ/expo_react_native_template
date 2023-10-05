/**
 * Takes a string as input and returns a new string with all characters replaced by asterisks.
 * @param {string} text - is a string that represents the original password.
 * @returns An object with the original password and the masked password.
 *
 * @example
 * ```ts
 * const text = 'password';
 * const password = maskToPassword(text);
 *
 * console.log(password); // { masked: '********', original: 'password' }
 * ```
 */
const maskToPassword = (text: string) => {
  const masked = text.replace(/./g, '*');
  return { masked, original: text };
};

export default maskToPassword;
