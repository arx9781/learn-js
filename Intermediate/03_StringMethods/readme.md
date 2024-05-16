JavaScript provides a rich set of built-in methods to manipulate strings. These methods allow you to search, modify, extract, and format textual information.

**Common String Methods:**

- **`length`:** Returns the length (number of characters) of a string.
- **`charAt(index)`:** Returns the character at a specific index (position) in the string.
- **`indexOf(substring, fromIndex)`:** Searches for a substring within the string and returns its starting index, or -1 if not found. You can optionally specify a starting index for the search.
- **`lastIndexOf(substring, fromIndex)`:** Similar to `indexOf`, but returns the last occurrence of the substring.
- **`slice(start, end)`:** Extracts a section of the string, starting at the specified `start` index (inclusive) and ending before the `end` index (exclusive).
- **`substring(start, end)`:** Similar to `slice`, but allows negative indices for counting from the end of the string.
- **`toUpperCase()`:** Converts the entire string to uppercase.
- **`toLowerCase()`:** Converts the entire string to lowercase.
- **`trim()`:** Removes leading and trailing whitespace characters (spaces, tabs, newlines) from the string.
- **`concat(string1, string2, ...)`:** Joins multiple strings together into a new string.
- **`replace(oldValue, newValue)`:** Replaces all occurrences of a specific substring (`oldValue`) with a new substring (`newValue`).

**Example:**

```javascript
let message = "Hello, JavaScript!";

console.log(message.length); // Outputs 18 (including spaces and punctuation)
console.log(message.charAt(0)); // Outputs "H" (character at index 0)
console.log(message.indexOf("Script")); // Outputs 7 (index where "Script" starts)
console.log(message.toUpperCase()); // Outputs "HELLO, JAVASCRIPT!"

let greeting = message.slice(0, 5); // Extracts "Hello"
console.log(greeting);

let trimmedMessage = message.trim(); // Removes leading/trailing spaces
console.log(trimmedMessage);
```

**Additional Methods:**

- **`split(separator)`:** Splits a string into an array of substrings, using the specified separator (e.g., comma, space) as the delimiter.
- **`search(regexp)`:** Searches for a regular expression pattern within the string and returns the index of the first match, or -1 if not found.
- **`match(regexp)`:** Returns an array of all matches for a regular expression in the string.
- **`startsWith(prefix, fromIndex)`:** Checks if the string starts with a specified prefix, optionally from a certain index.
- **`endsWith(suffix, length)`:** Checks if the string ends with a specified suffix, optionally considering the string length.

**Exploring Further:**

The world of JavaScript string methods is vast! Refer to the official documentation for in-depth explanations and examples of each method: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).

**Remember:**

- String methods are non-destructive. They typically return a new modified string, leaving the original string unchanged.
- Use string methods effectively to process and analyze textual data in your JavaScript programs.
