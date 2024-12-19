"use client";

import BaseButton from "@/components/Button";
import Section from "@/components/Section";
import Typography from "@/components/Typography";

export default function Settings() {
  return (
    <div>
      <Section className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 rounded-lg p-4 border border-gray-200 shadow-sm">
          <div className="flex flex-col gap-4">
            <Typography variant="h2">Settings</Typography>

            <Typography variant="body">
              I would love to contribute futher to this project.
            </Typography>
            <Typography variant="body-2">
              The code base has been made modular so that it is easy to add any
              new table or functionality
            </Typography>
            <BaseButton
              href="https://github.com/ashwaniarya"
              as="a"
              className="w-fit border border-medium rounded-lg"
              variant="text"
            >
              <Typography variant="body" className="text-primary">
                View on GitHub
              </Typography>
            </BaseButton>
          </div>
        </div>
      </Section>
    </div>
  );
}
