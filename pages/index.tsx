import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/sites/demo-site');
  }, []);
  
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-gray-500">Loading Exowatt Dashboard...</div>
    </div>
  );
} 
