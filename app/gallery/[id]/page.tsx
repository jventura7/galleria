import Pictures from '@/data.json';
import Image from 'next/image';

export default function Page({ params }: { params: { id: string } }) {
  const picture = Pictures.find((p, i) => i.toString() == params.id);
  return (
    <div className="flex w-full flex-col p-10">
      {picture ? (
        <div className="relative w-full">
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
          <div className="absolute bottom-0 left-0 h-20 w-3/4 bg-white p-4">
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
        </div>
      ) : (
        <h1>Invalid image source</h1>
      )}
    </div>
  );
}
