// pages/_app.tsx
import { AppProps } from "next/app";
import { ThemeContextWrapper } from "@/Context/ThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <ThemeContextWrapper>
      <Component {...pageProps} />
    </ThemeContextWrapper>
  );
}

export default MyApp;
