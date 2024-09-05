import Link from "next/link";

export default function Home() {
  return (
    <div className=" h-full w-full bg-slate-950">
      <div className=" bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
        <section className="flex flex-row gap-40 justify-center items-center h-screen">

          <button
            className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-[#b02222] to-[#fd9898] active:scale-95"
          >
            <span
              className="w-full h-full flex items-center gap-2 px-8 py-3 bg-[#fc3131] text-white rounded-[14px] bg-gradient-to-t from-[#e22c2c] to-[#fc4545]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path
                  d="M8 13V9m-2 2h4m5-2v.001M18 12v.001m4-.334v5.243a3.09 3.09 0 0 1-5.854 1.382L16 18a3.618 3.618 0 0 0-3.236-2h-1.528c-1.37 0-2.623.774-3.236 2l-.146.292A3.09 3.09 0 0 1 2 16.91v-5.243A6.667 6.667 0 0 1 8.667 5h6.666A6.667 6.667 0 0 1 22 11.667Z"
                ></path></svg
              >
              <Link href="/first-challenge" >Ir al primer reto</Link>
            </span
            >
          </button>
          <button
            className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-[#b02222] to-[#fd9898] active:scale-95"
          >
            <span
              className="w-full h-full flex items-center gap-2 px-8 py-3 bg-[#fc3131] text-white rounded-[14px] bg-gradient-to-t from-[#e22c2c] to-[#fc4545]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path
                  d="M8 13V9m-2 2h4m5-2v.001M18 12v.001m4-.334v5.243a3.09 3.09 0 0 1-5.854 1.382L16 18a3.618 3.618 0 0 0-3.236-2h-1.528c-1.37 0-2.623.774-3.236 2l-.146.292A3.09 3.09 0 0 1 2 16.91v-5.243A6.667 6.667 0 0 1 8.667 5h6.666A6.667 6.667 0 0 1 22 11.667Z"
                ></path></svg
              >
              <Link href="/second-challenge">Ir al segundo reto</Link>
            </span
            >
          </button>

        </section>
      </div>
    </div>
  );
}
