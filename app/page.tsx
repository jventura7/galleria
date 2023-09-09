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
          <Image
            width={0}
            height={0}
            style={{ width: '100%', height: '100%' }}
            sizes="100vw"
            alt={`Gallery image ${i}`}
            src={p.images.thumbnail.slice(1)}
          ></Image>
        </Link>,
      );
    });
    return pictureHtmlArray;
  };
  const pictureData = readData();

  return (
    <main className="grid w-full grid-cols-4 gap-6 p-10">{pictureData}</main>
  );
}
