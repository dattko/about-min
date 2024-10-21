import React from 'react';
import Section from '@/components/ui/section/Section';
import { IntroContent, SkillsContent, CareerContent, PortfolioContent } from '@/components/ui/sectionContents';
import ContactMe from '@/components/button/ContactMe';
import { getPortfolios, getSkills } from '@/lib/action/action';

export default async function Home() {
  const skills = await getSkills();
  const portfolio = await getPortfolios();
  const basicSkills = skills.filter(skill => skill.type === 'basic');
  const additionalSkills = skills.filter(skill => skill.type === 'additional');

  return (
    <div>
      <Section main black id='about'>
        <IntroContent />
      </Section>
      <Section black title='기술 스택' id='skills'>
        <SkillsContent 
          basicSkills={basicSkills}
          additionalSkills={additionalSkills}
        />
      </Section>
      <Section title='경력' id='career'>
        <CareerContent />
      </Section>
      <Section backColor='#FECC6A' id='projects'>
        <PortfolioContent portfolios={portfolio}/>
      </Section>
      <ContactMe />
    </div>
  );
}
