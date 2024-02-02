export function limitCharacters(inputString: string, maxLength: number): string {
   if (inputString.length <= maxLength) {
      return inputString;
   } else {
      // Find the last space within the character limit
      const lastSpaceIndex = inputString.lastIndexOf(' ', maxLength);

      // If a space is found, truncate the string at that space
      if (lastSpaceIndex !== -1) {
         return inputString.slice(0, lastSpaceIndex) + '...';
      } else {
         // If no space is found, simply truncate the string at the character limit
         return inputString.slice(0, maxLength) + '...';
      }
   }
}
