/*  ------------------------------ */
/*  Generic helper functions
/*  ------------------------------ */

type LinkType =
   | 'entry'
   | 'custom'
   | 'asset'
   | 'email'
   | 'tel'
   | 'url'
   | 'Entry'
   | 'Custom URL'
   | 'Asset';

// Can combine below two functions in the future as its just a small variation
export function getUrlForNavBar(
   nodeUri: string,
   url: string,
   type: LinkType,
): string {
   switch (type) {
      case 'Entry':
         return prettyLink(nodeUri);
      case 'Custom URL':
      case 'Asset':
         return url;
      default:
         return '#';
   }
}

export function getUrlForLink(
   uri: string,
   url: string,
   type: LinkType,
): string {
   switch (type) {
      case 'entry':
         return prettyLink(uri);
      case 'custom':
      case 'asset':
      case 'email':
      case 'tel':
      case 'url':
         return url;
      default:
         return '#';
   }
}

export function prettyLink(uri: string): string {
   if (uri != '/') {
      uri = '/' + uri;
   }
   return uri;
}

export async function async(promise: any) {
   try {
      const data = await promise;
      return [data, null];
   } catch (error) {
      return [null, error];
   }
}

export function invalidEmail(email: string) {
   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return !regex.test(email);
}
