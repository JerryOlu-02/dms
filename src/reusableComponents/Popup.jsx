import { useEffect, useRef, useState } from "react";
import Button from "./Button";

export default function Popup({
  productId = "It7OBHN01Gt3",
  buttonText = "Proceed to checkout",
  children,
}) {
  const SCRIPT_SRC = "https://mainstack.me/mainstack-cdn/popup_checkout.min.js";

  useEffect(() => {
    // Only add the external script if it's not already in the DOM
    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const s = document.createElement("script");
      s.src = SCRIPT_SRC;
      s.async = true;
      s.onload = () => {
        // optional: signal load for debugging
        // console.log("Mainstack script loaded");
        window.__MAINSTACK_CHECKOUT_SCRIPT_LOADED__ = true;
      };
      document.body.appendChild(s);
    } else {
      // optional: mark as loaded
      window.__MAINSTACK_CHECKOUT_SCRIPT_LOADED__ = true;
    }

    // NOTE: intentionally do NOT remove the script on unmount because that can
    // cause other components / HMR cycles to re-inject it and trigger the "two instances" detection.
  }, []);

  return (
    <>
      <button
        className="btn btn-popup"
        id="mainstack_checkout_btn"
        style={{ height: "40px" }}
      >
        {children || "Book A Seat"}
      </button>
      <iframe
        id="mainstack_checkout_iframe"
        src="https://checkout.mainstack.me/?productId=It7OBHN01Gt3&type=popup&width=410px"
        style={{
          border: "0",
          display: "none",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "100000",
          height: "100%",
          width: "100%",
        }}
        allow="payment"
        title="Mainstack Checkout"
      ></iframe>
    </>
  );
}
