"use client";
import { usePathname, useRouter } from "next/navigation";
import { useUserStore } from "@/stores/userStore";

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const userStore = useUserStore();

  // Redirect to login page if user is not logged in
  if(!userStore.isLoggedIn) {
    router.push("/login");
  }

  const handleLogout = () => {
    userStore.setLoggedOut();
    router.push("/login");
  };

  return (
    <nav className="flex flex-col items-center justify-between w-16 min-h-screen bg-[#363F72]">
      <button>Sidebar</button>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Sidebar;
