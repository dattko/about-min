import React from 'react';
import Section from '@/components/ui/section/Section';
import { IntroContent, SkillsContent, CareerContent, PortfolioContent } from '@/components/ui/sectionContents';
export default function Home() {

  return (
    <div>
      <Section main black>
        <IntroContent />
      </Section>
      <Section black title='기술 스택'>
        <SkillsContent />
      </Section>
      <Section title='경력'>
        <CareerContent />
      </Section>
      <Section backColor='#FECC6A'>
        <PortfolioContent/>
      </Section>
    </div>
  );
}
