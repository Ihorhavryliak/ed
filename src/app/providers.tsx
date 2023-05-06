// app/providers.tsx
"use client";

import EducationTheme from "@/chakra/EducationTheme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";


export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={EducationTheme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
