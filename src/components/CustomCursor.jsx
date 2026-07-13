import { useEffect, useRef, useState } from "react";
import "../styles/CustomCursor.css";

const lerp = (start, end, amount) => start + (end - start) * amount;

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const visibleRef = useRef(false);

  useEffect(() => {
    const canUseCustomCursor = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    if (!canUseCustomCursor) return undefined;

    setEnabled(true);
    document.body.classList.add("custom-cursor-active");

    const moveDot = (x, y) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
    };

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      mouse.current = { x, y };
      moveDot(x, y);

      ring.current.x = lerp(ring.current.x, x, 0.72);
      ring.current.y = lerp(ring.current.y, y, 0.72);
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (!visibleRef.current) {
        visibleRef.current = true;
        ring.current = { x, y };
        setVisible(true);
      }
    };

    const onMouseLeave = () => {
      visibleRef.current = false;
      setVisible(false);
    };

    const onMouseEnter = () => {
      visibleRef.current = true;
      setVisible(true);
    };

    const onPointerOver = (e) => {
      const target = e.target;
      if (
        target.closest(
          "a, button, input, textarea, select, label, [role='button'], .project-card, .nav-brand, .filter-btn",
        )
      ) {
        setHovering(true);
      }
    };

    const onPointerOut = (e) => {
      const target = e.target;
      if (
        target.closest(
          "a, button, input, textarea, select, label, [role='button'], .project-card, .nav-brand, .filter-btn",
        )
      ) {
        setHovering(false);
      }
    };

    let frameId;
    const animateRing = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.55);
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.55);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }

      frameId = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", onPointerOver);
    document.addEventListener("mouseout", onPointerOut);
    frameId = requestAnimationFrame(animateRing);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onPointerOver);
      document.removeEventListener("mouseout", onPointerOut);
      cancelAnimationFrame(frameId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`custom-cursor-dot ${visible ? "visible" : ""} ${hovering ? "hovering" : ""}`}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${visible ? "visible" : ""} ${hovering ? "hovering" : ""}`}
        aria-hidden="true"
      />
    </>
  );
}
