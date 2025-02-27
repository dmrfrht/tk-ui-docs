"use client";

import { useParams } from 'next/navigation';

const ConceptComponentPage: React.FC = () => {
  const { component } = useParams();

  return (
    <div>
      <h1 className="text-3xl font-bold">{component} Konsepti</h1>
      <p className="mt-4">
        {component} konsepti hakkında detaylı bilgi burada yer alacak.
      </p>
    </div>
  );
}

export default ConceptComponentPage; 