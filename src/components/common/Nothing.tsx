import Image from "next/image";
import Link from "next/link";

export default function Nothing() {
  return (
    <div>
      {" "}
      <Link
        href="https://gifs.alphacoders.com/gifs/view/113672"
        className="flex justify-center"
      >
        <div className="w-full md:w-3/5 aspect-video overflow-clip relative shadow-lg">
          <Image
            src="/images/fma.gif"
            alt="No articles available!"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </Link>
    </div>
  );
}
