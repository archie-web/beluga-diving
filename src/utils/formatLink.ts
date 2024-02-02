export const formatLink = (str: string) => {
   // Replace single quotes with underscores
   const cleanedStr = str.replace(/'/g, '');

   // Replace spaces with hyphens and convert to lowercase
   return cleanedStr.split(' ').join('-').toLowerCase();
};
