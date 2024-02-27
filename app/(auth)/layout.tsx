import React from "react";

interface Children {
  children: React.ReactNode;
}

const Layout: React.FC<Children> = ({ children }) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      {children}
    </main>
  );
};

export default Layout;
