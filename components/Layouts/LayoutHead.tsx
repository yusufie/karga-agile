import React, { ReactNode } from 'react';

import Header from "@/components/Header/Header";

interface LayoutProps {
  children: ReactNode;
}

const LayoutHead: React.FC<LayoutProps> = ({ children }) => {

  return (
    <main className="flex flex-col min-h-screen">
        <Header />
        {children}
    </main>
  );
};

export default LayoutHead;