"use client";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import { useUserStore } from "@/stores/userStore";

const Sidebar: React.FC = () => {
  const router = useRouter();
  
  const userStore = useUserStore();

  // Redirect to login page if user is not logged in
  if(!userStore.isLoggedIn) {
    // router.push("/login");
    redirect("/login");
  }

  const handleLogout = () => {
    userStore.setLoggedOut();
    // router.push("/login");
    redirect("/login");
  };

  return (
    <nav className="flex flex-col items-center justify-between w-16 bg-[#363F72] min-h-[calc(100vh-4rem)]">
      <button>Sidebar</button>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Sidebar;
