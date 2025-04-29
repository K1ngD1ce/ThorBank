"use client";

import { useEffect } from "react";
import { initCustomBtnEffect } from "@/shared/lib/customBtnScript";

export const CustomBtnEffectClient = () => {
  useEffect(() => {
    initCustomBtnEffect();
  }, []);

  return null;
};
