import "~/styles/globals.css";


import { TRPCReactProvider } from "~/trpc/react";

export const metadata = {
  title: "KwikCard",
  description: "Share whatever you want - kwikly",
  icons: [{ rel: "icon", url: "/punk.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
