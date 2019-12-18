import React from "react";

const gaString = `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-127073868-1');`;

export default function Ga() {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-127073868-1"
      />
      <script dangerouslySetInnerHTML={{ __html: gaString }} />
    </>
  );
}
