import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function ThemeProvider({
  children,
   forcedTheme = "system",
   defaultTheme = "system",
   ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={defaultTheme}
      forcedTheme={forcedTheme}
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      <VisuallyHidden />
      {children}
    </NextThemesProvider>
  );
}
