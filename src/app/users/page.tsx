"use client";

import ModuleNav from "@/app/components/ModuleNav";
import TitleBody from "@/components/TitleBody";
import ChatsTable from "../components/ChatsTable";
import Section from "@/components/Section";
import Typography from "@/components/Typography";

export default function Chats() {
  return (
    <div>
      <ModuleNav />
      <Section className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 rounded-lg p-4 border border-gray-200 shadow-sm">
          <div className="flex flex-col gap-4">
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="h4">Heading 4</Typography>
            <Typography variant="h5">Heading 5</Typography>
            <Typography variant="h6">Heading 6</Typography>
            <Typography variant="body">Body Text</Typography>
            <Typography variant="body-2">Body Text 2</Typography>
            <Typography variant="caption">Caption Text</Typography>
            <Typography variant="mono">Monospace Text</Typography>
            <Typography variant="overline">Overline Text</Typography>
          </div>
        </div>
      </Section>
    </div>
  );
}
