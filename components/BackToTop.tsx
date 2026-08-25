"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const SCROLL_THRESHOLD = 500;

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    let animationFrame: number | null = null;

    const updateVisibility = () => {
      if (animationFrame !== null) {
        return;
      }

      animationFrame = window.requestAnimationFrame(() => {
        setIsVisible(window.scrollY > SCROLL_THRESHOLD);
        animationFrame = null;
      });
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  useEffect(() => {
    const updateChatVisibility = (event: Event) => {
      setIsChatOpen((event as CustomEvent<boolean>).detail);
    };

    window.addEventListener("kuba-chat-visibility", updateChatVisibility);
    return () => {
      window.removeEventListener("kuba-chat-visibility", updateChatVisibility);
    };
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const shouldShow = isVisible && !isChatOpen;

  return (
    <button
      type="button"
      className={`back-to-top ${shouldShow ? "back-to-top--visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!shouldShow}
      tabIndex={shouldShow ? 0 : -1}
    >
      <ArrowUp size={20} strokeWidth={2.25} aria-hidden="true" />
    </button>
  );
}
