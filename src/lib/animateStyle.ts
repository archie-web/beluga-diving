import { MotionValue, useTransform } from 'framer-motion';

export const fadeInClass = `fade-in -translate-x-10 opacity-0`;

export function useParallax(
   value: MotionValue<number>,
   distance: number | string,
) {
   return useTransform(value, [0, 1], [-distance, distance]);
}
