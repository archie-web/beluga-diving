import SITE_CONFIG from '@/constants/siteConfig';
import { convertToWebpFileName } from '@/helpers/convertToWebpFileName';
import Image, { ImageProps } from 'next/image';

interface Props extends Omit<ImageProps, 'src, alt'> {
   src: any;
   alt: string;
}

const NextImage = ({ src, alt, ...props }: Props) => {
   // const [isLoading, setLoading] = useState(true);
   // console.log(isLoading);
   return (
      <picture>
         <source srcSet={convertToWebpFileName(src)} type="image/webp" />
         <Image
            src={src}
            alt={alt || SITE_CONFIG.SITE_NAME}
            // quality={65} // default 75
            // placeholder="blur"
            // className={`duration-500 ease-in-out
            // ${isLoading ? 'scale-105 blur-2xl' : 'scale-100 blur-0'}`}
            //  onLoadingComplete={() => setLoading(false)}
            {...props}
         />
      </picture>
   );
};

export default NextImage;
