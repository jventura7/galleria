import Pictures from '@/data.json';
import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';

export default function Home() {
  const readData = () => {
    const pictureHtmlArray: JSX.Element[] = [];
    Pictures.forEach((p, i) => {
      pictureHtmlArray.push(
        <Link href={`/gallery/${i}`}>
          <div className="relative">
            <div className="absolute inset-0 transition duration-300 hover:bg-slate-200 hover:bg-opacity-60"></div>
            <Image
              width={0}
              height={0}
              style={{
                width: '100%',
                minHeight: '100%',
                maxHeight: '100%',
                margin: '0 0 24px 0',
              }}
              sizes="100vw"
              alt={`Gallery image ${i}`}
              src={p.images.thumbnail.slice(1)}
            />
            <div className="absolute bottom-8 left-3 text-white">
              <h1 className="text-xl font-bold md:text-2xl xl:text-2xl">
                {p.name}
              </h1>
              <h1 className="md:text-md">{p.artist.name}</h1>
            </div>
          </div>
        </Link>,
      );
    });
    return pictureHtmlArray;
  };
  const pictureData = readData();

  return (
    <main className="w-full columns-1 gap-6 p-6 md:columns-2 xl:max-w-7xl xl:columns-4 xl:px-0">
      {pictureData}
    </main>
  );
}
