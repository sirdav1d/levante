"use client";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import ModalForm from "./modal-form";
import { ChevronRight } from "lucide-react";

export function Header() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Para Você",
      link: "#you",
    },
    {
      name: "Para Empresas",
      link: "/business",
    },
    {
        name: "FAQ",
        link: "#faq",
      },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full bg-black/0">
      <Navbar >
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary" className="bg-primary rounded-full font-medium gap-2 flex items-center text-white">Login <ChevronRight size={16}/></NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <ModalForm 
                triggerText="Login"
                triggerVariant="default"
                className="w-full"
              />
              <ModalForm 
                triggerText="Book a call"
                triggerVariant="default"
                className="w-full"
              />
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}


