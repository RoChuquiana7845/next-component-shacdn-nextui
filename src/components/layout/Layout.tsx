import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/layout/Sidebar";
import { Toaster } from "@/components/ui/sonner";

interface LayoutProps {
  children: React.ReactNode;
  withSidebar?: boolean; // Prop para habilitar/deshabilitar la barra lateral
}

export default function Layout({ children, withSidebar = true }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-1" role="main">
        {withSidebar && (
          <aside
            className="hidden lg:block"
            role="complementary"
            aria-label="Sidebar"
          >
            <Sidebar />
          </aside>
        )}
        <main
          className={`flex-1 p-6 ${
            withSidebar ? "lg:ml-0" : "w-full"
          }`}
          aria-label="Main Content"
        >
          {children}
        </main>
      </div>

      {/* Footer */}
      <Footer />

      {/* Notifications */}
      <Toaster />
    </div>
  );
}
