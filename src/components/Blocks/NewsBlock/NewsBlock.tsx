import NextLink from '@components/NextLink';
import parse from 'html-react-parser';

import { Container } from '@components/Container';
import {VStack} from '@components/Stack';
import uuid from 'react-uuid';

type ArticleProps = {
   bodyAdvanced: string;
   cta?: {
      label: string;
      url: string;
   };
};

interface Props {
   className?: string;
   data: {
      heading?: string;
      articles: ArticleProps[];
   };
}

export const NewsBlock = ({ className = '', data }: Props) => {
   return (
      <>
         <section className={`py-space ${className}`} data-testid="news-block">
            <Container size="xl">
               {data.heading && <h2 className="h2">{data.heading}</h2>}

               <div className="lg:grid-cols grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {data.articles.map((article) => (
                     <VStack
                        className="justify-between space-y-20 px-6 py-7 lg:py-20"
                        key={uuid()}
                     >
                        <p className="text-[26px] leading-[1.16]">
                           {parse(article.bodyAdvanced ?? '')}
                        </p>
                        {article.cta && (
                           <NextLink href="/">{article.cta.label}</NextLink>
                        )}
                     </VStack>
                  ))}
               </div>
            </Container>
         </section>
      </>
   );
};
