import React from "react";

import "milligram/dist/milligram.min.css";
import "@madzadev/audio-player/dist/index.css";
import "../public/style/index.scss";

export const metadata = {
  title: "Have you Tap today ?",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
