export function convertToWebpFileName(filename: string) {
   // Check if the filename ends with ".jpg"
   if (filename.endsWith('.jpg')) {
      // Replace ".jpg" with ".webp"
      return filename.replace('.jpg', '.webp');
   } else if (filename.endsWith('.png')) {
      return filename.replace('.png', '_lossless.webp');
   } else {
      // Return the original filename if it's not a ".jpg" file
      return filename;
   }
}
