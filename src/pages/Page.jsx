import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import ProfileCard from "./ProfileCard";
import EditProfileModal from "./EditProfileModal";
import { useState } from "react";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: "Andrew Smith",
    title: "CEO",
    telegram: "@andrewsmith",
    phone: "99 772-45-58",
  });

  const handleSave = (updatedData) => {
    setProfileData(updatedData);
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <header className="flex h-auto items-center gap-2 px-4 bg-[#444444]">
        <SidebarTrigger className=" -ml-4 absolute -mt-[620px]" />
      </header>

      <div className="flex-1 flex gap-4 p-6 bg-[#434343]">
        <ProfileCard profileData={profileData} onEdit={() => setIsModalOpen(true)} />
      </div>

      <EditProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        currentData={profileData}
      />
    </SidebarProvider>
  );
}
