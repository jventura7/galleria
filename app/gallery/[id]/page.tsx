'use client';
import Pictures from '@/data.json';
import Image from 'next/image';
import Link from 'next/link';
import GalleryImage from '@/components/GalleryImage';
import { useState } from 'react';

export default function Page({ params }: { params: { id: string } }) {
  const [open, setOpen] = useState(false);

  const picture = Pictures.find((p, i) => i.toString() == params.id);
  return (
    <div className="flex w-full flex-col p-6">
      {picture ? (
        <>
          {open ? (
            <GalleryImage
              image={picture.images.gallery.slice(1)}
              handleClose={setOpen}
            />
          ) : null}
          <div className="relative mb-40 w-full">
            <Image
              src={picture.images.hero.small.slice(1)}
              width={0}
              height={0}
              style={{
                width: '100%',
                height: '100%',
              }}
              sizes="100vw"
              alt={`Gallery image ${params.id}`}
            />
            <div className="absolute bottom-0 left-0 block h-20 w-3/4 bg-white p-4">
              <h1 className="mb-4 text-3xl font-semibold">{picture.name}</h1>
              <h2 className="mb-4 text-gray-500">{picture.artist.name}</h2>
              <Image
                src={picture.artist.image.slice(1)}
                alt={`${picture.artist.name} image`}
                width={0}
                height={0}
                style={{
                  width: '70px',
                  height: 'auto',
                }}
                sizes="100vw"
              />
            </div>
            <div
              onClick={() => setOpen(true)}
              className="absolute left-4 top-4 cursor-pointer bg-black p-3 text-center text-white opacity-70 transition duration-300 hover:bg-white hover:text-black hover:opacity-80"
            >
              <h1 className="w-32 text-xs font-bold tracking-widest">
                VIEW IMAGE
              </h1>
            </div>
          </div>
          <div className="relative leading-7">
            <h1 className="absolute right-0 top-[-60px] text-8xl font-bold text-gray-300 opacity-20">
              {picture.year}
            </h1>
            <p className="text-md mb-6 text-gray-800">{picture.description}</p>
            <Link
              className="text-gray-450 text-xs underline"
              href={picture.source}
            >
              GO TO SOURCE
            </Link>
          </div>
        </>
      ) : (
        <h1>Invalid image source</h1>
      )}
    </div>
  );
}
