import { useRouter } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function HandleLoginClick() {
  const router = useRouter();
  const { isSignedIn, user } = useUser();

  const handleLoginClick = () => {
    router.push("/sign-in");
  };

  return (
    <div className="md:flex items-center space-x-4">
      {isSignedIn ? (
        <>
          <Link
            key="diagnosa"
            href="/diagnosa"
            className="text-white hover:text-yellow-400 transition duration-300 text-lg"
          >
            <p>Diagnosa</p>
          </Link>

          <div className="flex items-center justify-between w-full mt-4 md:mt-0">
            <span className="px-4 py-2 rounded bg-[#c61212] text-white">
              <i>{user.username}</i>
            </span>

            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10 border border-[#c61212] rounded-full",
                },
              }}
            />
          </div>
        </>
      ) : (
        <button
          onClick={handleLoginClick}
          className="px-4 py-2 rounded bg-[#c61212] text-white"
        >
          Daftar Sekarang
        </button>
      )}
    </div>
  );
}
