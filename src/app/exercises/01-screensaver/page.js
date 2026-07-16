import React from "react";
import Link from "next/link";

function ScreenSaverIndexPage() {
  return (
    <main>
      <p>Choose your color: </p>
      <ul>
        <li>
          <Link href="01-screensaver/chartreuse">Chartreuse</Link>
        </li>
        <li>
          <Link href="01-screensaver/hotpink">Hot pink</Link>
        </li>
        <li>
          <Link href="01-screensaver/darkorchid">Dark orchid</Link>
        </li>
        <li>
          <Link href="01-screensaver/peachpuff">Peach puff!</Link>
        </li>
        <li>
          <Link href="01-screensaver/teal">Teal</Link>
        </li>
      </ul>
    </main>
  );
}

export default ScreenSaverIndexPage;
