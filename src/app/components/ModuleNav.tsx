import { usePathname } from "next/navigation";
import BaseButton from "../../components/Button";
import Typography from "../../components/Typography";
import Icon from "@/components/Icon";
import Link from "next/link";
import Section from "@/components/Section";

interface ModuleNavProps {
  modules?: Array<{
    icon: string;
    title: string;
    href: string;
  }>;
}

const ModuleNav: React.FC<ModuleNavProps> = ({
  modules = [
    { icon: "pie-slice", title: "Summary", href: "/" },
    { icon: "price-tag", title: "Sales", href: "/sales" },
    { icon: "chat", title: "Chats", href: "/chats" },
  ],
}) => {
  const pathname = usePathname();

  return (
    <Section className="flex items-center gap-2 border-b border-gray-200">
      <div className="flex items-center gap-2 overflow-x-auto">
        {modules.map((item, index) => {
          const active = pathname === item.href;
          return (
            <div key={index} className="flex items-center gap-2">
              <Link
                href={item.href}
                className={`flex items-center gap-2 px-3 sm:px-3 py-2 sm:py-2 rounded-full ${
                  active ? "bg-secondary" : "bg-transparent"
                }`}
              >
                <Icon
                  type={item.icon}
                  size={20}
                  color={active ? "black" : "#8A94A6"}
                />
                <Typography
                  variant="h6"
                  className={`${active ? "text-foreground" : "text-gray-500"}`}
                >
                  {item.title}
                </Typography>
              </Link>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default ModuleNav;
