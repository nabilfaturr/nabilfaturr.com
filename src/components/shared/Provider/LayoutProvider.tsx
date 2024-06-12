import React from "react";

type LayoutProviderProps = {
  children: React.ReactNode;
};

const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  return (
    <main className="max-w-xl py-2 mx-auto md:px-0 px-3 h-screen overflow-hidden">
      {children}
    </main>
  );
};

export default LayoutProvider;
