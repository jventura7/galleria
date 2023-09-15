'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const [start, setStart] = useState(false);
  const router = useRouter();
  const path = usePathname();
  const currentPage = parseInt(path.split('/').slice(-1)[0]);

  useEffect(() => {
    if (start) {
      const timer = setTimeout(() => {
        router.push(`/gallery/${(currentPage + 1) % 15}`);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [path, start]);

  const handleStartSlideshow = () => {
    if (!start && path === '/') {
      router.push('/gallery/0');
    }
    setStart(!start);
  };

  return (
    <header className="flex w-full items-center justify-between border-b-2 border-gray-200 p-6 xl:max-w-7xl xl:px-0">
      <Link
        onClick={() => setStart(false)}
        href="/"
        className="text-3xl font-bold"
      >
        galleria.
      </Link>
      <button onClick={handleStartSlideshow}>
        {start ? <h1>STOP SLIDESHOW</h1> : <h1>START SLIDESHOW</h1>}
      </button>
    </header>
  );
}
