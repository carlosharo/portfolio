'use client'
import { PersonalInfo } from './_components/PersonalInfo';
import { Skills } from './_components/Skills';
import { useContext } from 'react';
import { PortfolioContext } from './_context/ContextProvider';
import { Container } from '@mui/material';
import Habilities from './_components/Habilities';

export default function Home() {
  const portfolio = useContext(PortfolioContext);
  const { skills: { primary, secondary }, habilities } = portfolio;

  return (
    <>
      <PersonalInfo />
      <Skills {...primary} />
      <Habilities {...{ habilities }} />
      <Skills {...secondary} />
      <Habilities {...{ habilities }} />
    </>
  );
}

