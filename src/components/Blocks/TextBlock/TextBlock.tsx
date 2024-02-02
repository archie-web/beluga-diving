import { Container } from '@components/Container';
import NextLink, { LinkFieldProps } from '@components/NextLink';
import parse from 'html-react-parser';
import { twMerge } from 'tailwind-merge';

interface Props {
   className?: string;
   data: {
      tagline?: string;
      linkField?: LinkFieldProps;
      bodyAdvanced: string;
   };
}

export const TextBlock = ({ className = '', data }: Props) => (
   <section
      className={twMerge('wysiwyg-block py-spacing', className)}
      data-testid="text-block"
   >
      <Container>
         {data.tagline && (
            <div className="tagline">{parse(data.tagline ?? '')}</div>
         )}

         {parse(data.bodyAdvanced ?? '')}

         {data.linkField && (
            <>
               {data.linkField.url != null && (
                  <NextLink href={data.linkField.url}>
                     {data.linkField.customText
                        ? data.linkField.customText
                        : data.linkField.text}
                  </NextLink>
               )}
            </>
         )}
      </Container>
   </section>
);
