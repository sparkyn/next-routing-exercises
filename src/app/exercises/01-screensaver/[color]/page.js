import React from "react";

import ScreenSaver from "../../../../components/ScreenSaver";

async function ScreenSaverExercise({ params }) {
  const logoColor = await params.color;

  return (
    <main className="screen-saver-wrapper">
      <ScreenSaver color={logoColor} />
    </main>
  );
}

export default ScreenSaverExercise;
