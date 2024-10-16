"use client";

import { Language } from "@/app/(landing)/domain/language";
import { initLang, setLanguage } from "@/app/i18n/actions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {
  lng: string;
}

const Lang: React.FC<Props> = ({ lng }) => {
  const router = useRouter();

  useEffect(() => {
    initLang();
    router.refresh();
  }, []);

  const handleChangeLng = (lng: string) => {
    setLanguage(lng);
    router.refresh();
  };

  return (
    <div className="flex gap-1">
      <p
        className={`cursor-pointer ${
          lng == Language.ES && " border-b-2 border-primary"
        } text-darkmode`}
        onClick={() => handleChangeLng("es")}
      >
        ES
      </p>
      <p className="text-darkmode">|</p>
      <p
        className={`cursor-pointer ${
          lng == Language.EN && " border-b-2 border-primary"
        } text-darkmode`}
        onClick={() => handleChangeLng("en")}
      >
        EN
      </p>
    </div>
  );
};

export default Lang;
