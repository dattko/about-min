import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}
const Section:React.FC<SectionProps> = ({title, children}) => {
  return (
    <section>
      <div>
        <span>{title}</span>
        <div>
          {children}
        </div>
      </div>
    </section>
  );
}


export default Section;