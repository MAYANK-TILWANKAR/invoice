import { useMemo } from "react";

// ShadCn
import { Card } from "@/components/ui/card";

// Components
import { DevDebug, LanguageSelector, ThemeSwitcher } from "@/app/components";

const BaseNavbar = () => {
  const devEnv = useMemo(() => {
    return process.env.NODE_ENV === "development";
  }, []);

  return (
    <header className="container">
      <nav>
        <Card className="flex flex-wrap justify-between items-center px-5 py-5 ">
          <h2 className="text-4xl font-semobold">Invoice Generator</h2>
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <ThemeSwitcher />
          </div>
        </Card>
      </nav>
    </header>
  );
};

export default BaseNavbar;
