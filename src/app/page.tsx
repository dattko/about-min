import React from 'react';
import Section from '@/components/ui/section/Section';
import { IntroContent, SkillsContent, CareerContent, PortfolioContent } from '@/components/ui/sectionContents';
import ContactMe from '@/components/button/ContactMe';
export default function Home() {

  return (
    <div>
      <Section main black id='about'>
        <IntroContent />
      </Section>
      <Section black title='기술 스택' id='skills'>
        <SkillsContent />
      </Section>
      <Section title='경력' id='career'>
        <CareerContent />
      </Section>
      <Section backColor='#FECC6A' id='projects'>
        <PortfolioContent/>
      </Section>
      <ContactMe />
    </div>
  );
}
