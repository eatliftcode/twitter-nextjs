import Image from "next/image";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { HomeIcon, UsersIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
      {/* logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          width="50"
          height="50"
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
        ></Image>
      </div>
      {/* Menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active="true" />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
      </div>

      {/* Button */}
      <button className="bg-blue-400 text-white rounded-full shadow-md w-56 h-12 font-bold hover:brightness-95 text-lg hidden xl:inline">
        Tweet
      </button>

      {/* Mini Profile */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start">
        <img
          className="h-10 w-10 rounded-full"
          src="https://media-exp2.licdn.com/dms/image/C4D03AQE7KQsbcy6b_w/profile-displayphoto-shrink_800_800/0/1619885258821?e=1661990400&v=beta&t=rgy8GXNH6eCgUKlbxOVj9f-8z2f4nLbk_zRSztzOyxc"
          alt="usr-img"
        />
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">Mohit Gupta</h4>
          <p className="text-gray-500">@eatliftcode</p>
        </div>
        <DotsHorizontalIcon className="h-5 xl:ml-8 hidden x:inline" />
      </div>
    </div>
  );
};
export default Sidebar;
