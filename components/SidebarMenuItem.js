export const SidebarMenuItem = ({ text, Icon, active }) => {
  return (
    <div className="hoverEffect space-x-3 flex items-center text-gray-700 justify-center xl:justify-start">
      <Icon className="h-7" />
      <span className={`${active && "font-bold"} hidden xl:inline`}>{text}</span>
    </div>
  );
};
