'use client'
import { PersonalInfo } from './_components/PersonalInfo';
import { Skills } from './_components/Skills';
import { useContext } from 'react';
import { PortfolioContext } from './_context/ContextProvider';

export default function Home() {
  const portfolio = useContext(PortfolioContext);
  const { skills: { primary, secondary } } = portfolio;
  return (
    <>
      <PersonalInfo />
      <Skills {...primary} />
      <Skills {...secondary} />
    </>
  );
}

