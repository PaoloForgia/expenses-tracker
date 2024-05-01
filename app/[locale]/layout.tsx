import BigScreenLayout from "@/components/Layout/BigScreenLayout";
import { WithChildren } from "@/types/props";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "./global.css";
import "@mantine/core/styles.css";
import { theme } from "../../theme";

export const metadata = {
  title: "Mantine Next.js template",
  description: "I am using Mantine with Next.js!",
};

type Props = {
  params: { locale: string };
} & WithChildren;

const RootLayout = ({ children, params: { locale } }: Props) => {
  return (
    <html lang={locale}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <BigScreenLayout>{children}</BigScreenLayout>
        </MantineProvider>
      </body>
    </html>
  );
};

export default RootLayout;
