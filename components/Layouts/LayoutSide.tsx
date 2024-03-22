import React, { ReactNode } from 'react';
import Sidebar from "@/components/Sidebar/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const LayoutSide: React.FC<LayoutProps> = ({ children }) => {

  return (
    <main className="flex flex-row bg-black text-white">
        <Sidebar />
        {children}
    </main>
  );
};

export default LayoutSide;