'use client';
import React, { createContext, useContext, useRef, MutableRefObject, useState, useEffect } from 'react';

interface ScrollContextType {
  refs: { [key: string]: MutableRefObject<HTMLElement | null> };
  addRef: (key: string, ref: MutableRefObject<HTMLElement | null>) => void;
  scrollTo: (id: string) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const refsRef = useRef<{ [key: string]: MutableRefObject<HTMLElement | null> }>({});

  const addRef = (key: string, ref: MutableRefObject<HTMLElement | null>) => {
    refsRef.current[key] = ref;
  };

  const scrollTo = (id: string) => {
      refsRef.current[id].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollContext.Provider value={{ refs: refsRef.current, addRef, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};