"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { usePathname } from "next/navigation";

type Lng = "es" | "en";

interface LngContextProps {
  lng: Lng;
}

const LngContext = createContext<LngContextProps | undefined>(undefined);

export const LngProvider = ({ children }: { children: ReactNode }) => {
  const [lng, setLngState] = useState<Lng>("en");
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathParts = pathname.split("/");
      const maybeLng = pathParts[2];

      if (maybeLng === "es" || maybeLng === "en") {
        setLngState(maybeLng);
      } else {
        setLngState("es");
      }
    }
  }, [pathname]);

  return <LngContext.Provider value={{ lng }}>{children}</LngContext.Provider>;
};

export const useLng = () => {
  const context = useContext(LngContext);
  if (!context) {
    throw new Error("useLng must be used within a LngProvider");
  }
  return context;
};
