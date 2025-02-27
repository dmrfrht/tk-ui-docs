import { ReactNode } from 'react';
import Sidebar from '../../components/Sidebar';

interface DocsLayoutProps {
  children: ReactNode;
}

const DocsLayout: React.FC<DocsLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 h-screen overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

export default DocsLayout; 