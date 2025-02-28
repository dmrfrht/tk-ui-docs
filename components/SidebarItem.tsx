import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarItemProps {
  item: {
    id: string;
    name: string;
    url: string;
  };
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item }) => {
  const pathname = usePathname();
  const isActive = pathname === item.url;

  return (
    <li key={item.id} className="mt-1">
      <Link href={item.url} className={`block py-1 px-4 text-sm rounded-sm hover:bg-red-500 hover:cursor-pointer hover:text-white ${isActive ? 'bg-red-500 text-white' : 'text-gray-500'}`}>
        {item.name}
      </Link>
    </li>
  );
}

export default SidebarItem; 