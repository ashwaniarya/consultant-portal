import { usePathname } from "next/navigation";
import BaseButton from "../../components/Button";
import Typography from "../../components/Typography";

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
    <section className="flex items-center gap-2 p-4">
      <div className="flex items-center gap-2 overflow-x-auto">
        {modules.map((item, index) => {
          const active = pathname === item.href;
          return (
            <div key={index} className="flex items-center gap-2">
              <BaseButton
                variant="pill"
                as="a"
                href={item.href}
                className={`${active ? "bg-secondary" : "bg-transparent"}`}
                leftIcon={item.icon}
                leftIconColor={active ? "black" : "#8A94A6"}
              >
                <Typography
                  variant="body"
                  className={`${active ? "text-foreground" : "text-gray-500"}`}
                >
                  {item.title}
                </Typography>
              </BaseButton>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ModuleNav;
