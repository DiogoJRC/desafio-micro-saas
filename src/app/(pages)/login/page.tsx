import { handleAuth } from "@/app/actions/handle-auth";
import Image from "next/image";

export default function Login() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className="text-3xl font-bold">Login</h1>

        <form action={handleAuth}>
          <button
            type="submit"
            className="cursor-pointer rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          >
            Signin with Google
            <Image
              loading="lazy"
              width={24}
              height={24}
              src="google.svg"
              alt="Google"
            />
          </button>
        </form>
      </main>
    </div>
  );
}
