import Image from "next/image";

export default function Divider() {
  return (
    <div className="md:my-10 xs:my-2 flex w-full justify-center" data-aos="fade-in" data-aos-duration="500">
      <div className="relative w-24 sm:w-32 md:w-50">
        <Image
          src="/divider.png"
          alt="Section divider"
          width={160}
          height={40}
          className="h-auto w-full object-contain opacity-50"
          priority={false}
        />
      </div>
    </div>
  );
}