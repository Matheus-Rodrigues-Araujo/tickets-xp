"use client";
import { ThemeProvider } from "@mui/material";
import theme from "@/themes/theme";

import { ReactNode } from "react";

import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
const queryClient = new QueryClient();

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </QueryClientProvider>
  );
};
