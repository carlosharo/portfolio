'use client'
import { PersonalInfo } from './_components/PersonalInfo';
import { Skills } from './_components/Skills';
import { useContext } from 'react';
import { PortfolioContext } from './_context/ContextProvider';
import Habilities from './_components/Habilities';

export default function Home() {
  const portfolio = useContext(PortfolioContext);
  const { skills: { primary: primarySkills, secondary: secondarySkills }, habilities: { main: mainHabilities, secondary: secondaryHabilities } } = portfolio;

  return (
    <>
      <PersonalInfo />
      <Skills {...primarySkills} />
      <Habilities habilities={mainHabilities}  />
      <Skills {...secondarySkills} />
      <Habilities habilities={secondaryHabilities}/>
    </>
  );
}

