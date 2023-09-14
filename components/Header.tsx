import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between border-b-2 border-gray-200 p-6 xl:max-w-7xl xl:px-0">
      <Link href="/" className="text-3xl font-bold">
        galleria.
      </Link>
      <Link href="/">START SLIDESHOW</Link>
    </header>
  );
}
