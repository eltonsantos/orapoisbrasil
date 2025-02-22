import Image from "next/image";

export default function Profile() {
  return (
    <div className="text-center mb-6">
      <Image
        src="/orapoisbrasil.png"
        alt="Ora Pois, Brasil!"
        width={100}
        height={100}
        className="w-28 h-28 mx-auto rounded-full border-cyan-300 border-2"
      />
      <p className="text-xl font-medium mt-2 border-cyan-300 border-2 dark:text-white">@orapoisbrasil</p>
    </div>
  );
}