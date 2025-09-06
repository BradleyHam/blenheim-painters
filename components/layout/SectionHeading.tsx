import React from 'react';
import HeadingTag from '../ui/HeadingTag';
interface SectionHeadingProps {
  subtitle: string;
  title: string;
  type: number;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ subtitle, title, type }) => (
  <div className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-navy flex flex-col items-start gap-6 ${type == 2 && 'items-center'}`}>
            <HeadingTag>{subtitle}</HeadingTag>
              <h2 className="font-semibold tracking-tight text-2xl lg:text-3xl" >
             {title}
              </h2>
              <div className="h-1 w-24 bg-gold"></div>
            </div>
);

export default SectionHeading;
