'use client'
import React, { createContext, useState } from 'react';
import { portfolioProps } from '../_commons/_mocks';
import { portfolio } from '../_commons/_mocks';

interface ContextProviderProps {
    children: React.ReactNode;
}

export const PortfolioContext = createContext<portfolioProps>(portfolio);

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const [state, setState] = useState<portfolioProps>(portfolio);

    return (
        <PortfolioContext.Provider value={state}>
            {children}
        </PortfolioContext.Provider>
    );
};