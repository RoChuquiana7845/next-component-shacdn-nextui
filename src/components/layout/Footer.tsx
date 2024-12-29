import React from "react";
import { Separator } from "@/components/ui/separator";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  sections?: FooterSection[];
  companyName?: string;
  year?: number;
}

export default function Footer({
  sections = [
    {
      title: "About Us",
      links: [
        { label: "Our Story", href: "#" },
        { label: "Team", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Web Design", href: "#" },
        { label: "Development", href: "#" },
        { label: "Consulting", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Twitter", href: "#" },
        { label: "Facebook", href: "#" },
        { label: "LinkedIn", href: "#" },
      ],
    },
  ],
  companyName = "Your Company Name",
  year = new Date().getFullYear(),
}: FooterProps) {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container py-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="my-8" />
        <p className="text-center text-sm text-gray-500">
          © {year} {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
