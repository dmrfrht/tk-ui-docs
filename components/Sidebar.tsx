"use client";

import SidebarSection from './SidebarSection';
import { concepts } from '../data/concepts';
import { basicComponents } from '../data/basicComponents';
import { compositeComponents } from '../data/compositeComponents';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white p-4 h-screen overflow-y-auto">
      <SidebarSection title="Concepts" items={concepts} />
      <SidebarSection title="Basic Components" items={basicComponents} />
      <SidebarSection title="Composite Components" items={compositeComponents} />
    </aside>
  );
};

export default Sidebar; 