import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTopRoute() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // scroll to top every time the route or hash changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
}