"use client";

import * as React from "react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function WhatsAppFloat() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="https://wa.me/#"
      aria-label="Agendar consulta via WhatsApp"
      className={[
        "fixed bottom-6 right-6 z-50",
        "w-14 h-14 rounded-full bg-[#25D366] text-white",
        "flex items-center justify-center",
        "shadow-lg",
        "transition duration-200",
        "hover:shadow-xl hover:scale-110",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-2 pointer-events-none",
      ].join(" ")}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
