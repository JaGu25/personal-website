"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import FullLoadingScreen from "@/shared/components/FullLoadingScreen";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/landing/en");
  }, []);

  return <FullLoadingScreen />;
}
