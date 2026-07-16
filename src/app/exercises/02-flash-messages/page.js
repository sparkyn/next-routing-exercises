"use client";
import React from "react";
import Link from "next/link";
import ToastShelf from "../../../components/ToastShelf";
import { ToastContext } from "../../../components/ToastProvider";

function FlashMsgExercise() {
  const { toasts } = React.useContext(ToastContext);

  return (
    <>
      <main>
        <h1>Welcome to my website!</h1>
        <p>
          Got feedback? Please{" "}
          <Link href="/exercises/02-flash-messages/contact">contact us</Link>.
        </p>
      </main>
      {toasts.length > 0 && <ToastShelf />}
    </>
  );
}

export default FlashMsgExercise;
