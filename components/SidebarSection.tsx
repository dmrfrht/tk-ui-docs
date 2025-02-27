import { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import SidebarItem from './SidebarItem';

interface SidebarSectionProps {
  title: string;
  items: { id: string; name: string; url: string }[];
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-4">
      <h2
        className="text-sm font-bold flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </h2>
      {isOpen && (
        <ul className="mb-5">
          {items.map((item) => (
            <SidebarItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default SidebarSection; 