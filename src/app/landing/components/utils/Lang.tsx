"use client";
import { Language } from "@/app/landing/domain/language";
import Link from "next/link";

interface Props {
  lng: string;
}

const Lang: React.FC<Props> = ({ lng }) => {
  return (
    <div className="flex gap-1">
      <Link
        className={`cursor-pointer ${
          lng == Language.ES && " border-b-2 border-primary"
        } text-darkmode`}
        href={`/landing/es`}
      >
        ES
      </Link>
      <p className="text-darkmode">|</p>
      <Link
        className={`cursor-pointer ${
          lng == Language.EN && " border-b-2 border-primary"
        } text-darkmode`}
        href={`/landing/en`}
      >
        EN
      </Link>
    </div>
  );
};

export default Lang;
