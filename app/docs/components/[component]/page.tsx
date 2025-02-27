"use client";

import { useParams } from 'next/navigation';

const ComponentPage: React.FC = () => {
  const { component } = useParams();

  return (
    <div>
      <h1 className="text-3xl font-bold">{component} Bileşeni</h1>
      <p className="mt-4">
        {component} bileşeni hakkında detaylı bilgi burada yer alacak.
      </p>
    </div>
  );
}

export default ComponentPage; 