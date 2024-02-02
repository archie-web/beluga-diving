import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface FlipCardProps {
   frontContent: React.ReactNode;
   backContent: React.ReactNode;
   className?: string;
}

const cardStyle = `absolute bg-slate-100 flex h-full w-full items-center justify-center`;

const FlipCard = ({ frontContent, backContent, className }: FlipCardProps) => {
   const [isFlipped, setIsFlipped] = useState(false);

   const handleFlip = () => {
      setIsFlipped(!isFlipped);
   };

   return (
      <div
         className={`relative h-[400px] w-[280px] cursor-pointer ${className}`}
         style={{ perspective: '1000px' }}
         onMouseEnter={handleFlip}
         onMouseLeave={handleFlip}
         data-testid="flip-card"
      >
         <motion.div
            className="flip-card__inner absolute h-full w-full transition-all duration-500"
            style={{
               transformStyle: 'preserve-3d',
               // transform: isFlipped ? 'rotateY(180deg)' : 'unset',
            }}
            animate={{ rotateY: isFlipped ? '180deg' : 0 }}
            transition={{
               duration: 0.22,
               // type: 'spring',
            }}
         >
            <div
               className={`${cardStyle}`}
               style={{ backfaceVisibility: 'hidden' }}
               data-testid="card__front"
            >
               {frontContent}
            </div>
            <div
               className={`${cardStyle} `}
               style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
               }}
               data-testid="card__back"
            >
               {backContent}
            </div>
         </motion.div>
      </div>
   );
};

export default FlipCard;
