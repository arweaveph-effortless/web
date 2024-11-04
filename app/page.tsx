import Image from "next/image";

export default async function Home() {
  const response = await fetch("http://localhost:4000/api").catch((error) => {
    console.error(error);
  });

  if (!response?.ok) {
    console.error("Failed to fetch data");
  }

  const data = await response?.json();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>
        {data?.data?.message ? data?.data?.message : "Can't connect to server"}
      </h1>
    </div>
  );
}
