'use client'
import React, { createContext, useState } from 'react';
import { portfolio } from '../_commons/_mocks';
import { PortfolioProps } from '../_commons/_types';

interface ContextProviderProps {
    children: React.ReactNode;
}

export const PortfolioContext = createContext<PortfolioProps>(portfolio);

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const [state] = useState<PortfolioProps>(portfolio);

    return (
        <PortfolioContext.Provider value={state}>
            {children}
        </PortfolioContext.Provider>
    );
};