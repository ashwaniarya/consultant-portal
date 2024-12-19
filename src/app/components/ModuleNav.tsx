import { usePathname } from "next/navigation";
import Typography from "../../components/Typography";
import Icon, { IconType } from "@/components/Icon";
import Link from "next/link";
import Section from "@/components/Section";

const defaultModules = [
  { icon: "pie-slice", title: "Summary", href: "/" },
  { icon: "price-tag", title: "Sales", href: "/sales" },
  { icon: "chat", title: "Chats", href: "/chats" },
];

const ModuleNav = ({ modules = defaultModules }) => {
  const pathname = usePathname();

  return (
    <Section className="flex border-b border-gray-200">
      <div className="flex gap-2 overflow-x-auto">
        {modules.map(({ icon, title, href }) => {
          const isActive = pathname === href;
          const linkClass = `flex items-center gap-2 px-3 py-2 rounded-full ${
            isActive ? "bg-secondary" : ""
          }`;
          const textClass = isActive ? "text-foreground" : "text-gray-500";

          return (
            <Link key={href} href={href} className={linkClass}>
              <Icon
                type={icon as IconType}
                size={20}
                color={isActive ? "black" : "#8A94A6"}
              />
              <Typography variant="h6" className={textClass}>
                {title}
              </Typography>
            </Link>
          );
        })}
      </div>
    </Section>
  );
};

export default ModuleNav;
