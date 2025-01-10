import * as React from "react";
import { useState } from "react";
import { FaGraduationCap, FaUser, FaLayerGroup } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import { AiOutlineDollar } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      items: [
        { title: "Leads", icon: <HiUserAdd />, url: "#" },
        { title: "Teachers", url: "#", icon: <FaUser /> },
        { title: "Groups", url: "#", icon: <FaLayerGroup /> },
        { title: "Graduation", url: "#", icon: <FaGraduationCap /> },
        { title: "Budget", url: "#", icon: <AiOutlineDollar /> },
        {
          title: "Notifications",
          url: "#",
          icon: <IoMdNotificationsOutline />,
        },
        {
          title: "Settings",
          icon: <CiSettings />,
          subItems: [
            { title: "Office", url: "#" },
            { title: "CEO", url: "#" },
            { title: "Archive", url: "#" },
          ],
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }) {
  const [openSettings, setOpenSettings] = useState(false);

  const toggleSettings = () => {
    setOpenSettings(!openSettings);
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="p-4">Logo</div>
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((group, groupIndex) => (
          <SidebarMenu key={`group-${groupIndex}`}>
            {group.items.map((item, itemIndex) => (
              <React.Fragment key={`item-${groupIndex}-${itemIndex}`}>
                {!item.subItems ? (
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a
                        className="text-[#006FEE] hover:text-[#006FEE] p-5 text-xl flex items-center gap-2"
                        href={item.url}
                      >
                        {item.icon} {item.title}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ) : (
                  <SidebarMenuItem>
                    <button
                      className="text-[#006FEE] hover:text-[#0056b3] p-5 text-xl flex items-center justify-between w-full"
                      onClick={toggleSettings}
                    >
                      <div className="flex items-center gap-2">
                        {item.icon} {item.title}
                      </div>
                      {openSettings ? (
                        <FaChevronUp size={16} />
                      ) : (
                        <FaChevronDown size={16} />
                      )}
                    </button>
                    {openSettings && (
                      <div className="ml-8 mt-2 space-y-2">
                        {item.subItems.map((subItem, subIndex) => (
                          <a
                            key={`subItem-${subIndex}`}
                            className="block text-[#006FEE] hover:text-[#0056b3]"
                            href={subItem.url}
                          >
                            {subItem.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </SidebarMenuItem>
                )}
              </React.Fragment>
            ))}
          </SidebarMenu>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
