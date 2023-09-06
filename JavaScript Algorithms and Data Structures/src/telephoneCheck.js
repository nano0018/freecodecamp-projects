/**
 *  Regex: /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/
    ^: This anchors the pattern to the beginning of the string, ensuring that the pattern starts matching from the beginning of the input.

    (1\s?)?: This part of the pattern is optional (?) and matches the country code 1 followed by an optional whitespace character (\s?). This allows for the presence of a country code (1) followed by an optional space.

    (\(\d{3}\)|\d{3}): This part matches the area code. It has two alternatives separated by |. The first alternative \(\d{3}\) matches a three-digit area code enclosed in parentheses. The second alternative \d{3} matches a three-digit area code without parentheses. This handles both formats of area codes.

    [\s-]?: This matches an optional whitespace character or hyphen. It allows for flexibility in formatting by allowing a space or hyphen to be present or absent after the area code.

    \d{3}: This matches the first three digits of the phone number, which is the central office code.

    [\s-]?: This matches another optional whitespace character or hyphen after the central office code.

    \d{4}: This matches the last four digits of the phone number, which is the line number.

    $: This anchors the pattern to the end of the string, ensuring that the pattern must match the entire input string.

To summarize, the regular expression checks for a valid US phone number by accommodating various formats, including the presence of a country code (1), area code in different formats, and optional spaces or hyphens between the number components. If the input string matches this pattern, it is considered a valid US phone number.
 */
function telephoneCheck(str) {
  // Regular expression pattern for valid US phone number formats
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

  // Test the string against the pattern
  return regex.test(str);
}

module.exports = telephoneCheck;
