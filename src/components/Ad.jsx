import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function Ad() {
  return <div>Ad</div>;
}

function BannerAd() {
  const adRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.DEV) return;

    const loadAds = () => {
      const atOptions = {
        key: "e9298e6dbe64bae2b443c38bd2d0bb8c",
        format: "iframe",
        height: 90,
        width: 728,
        params: {},
      };

      const script1 = document.createElement("script");
      script1.type = "text/javascript";
      script1.innerHTML = `atOptions = ${JSON.stringify(atOptions)};`;

      const script2 = document.createElement("script");
      script2.type = "text/javascript";
      script2.src =
        "//rethinkexercisesupplement.com/e9298e6dbe64bae2b443c38bd2d0bb8c/invoke.js";

      if (adRef.current) {
        adRef.current.innerHTML = "";
        adRef.current.appendChild(script1);
        adRef.current.appendChild(script2);
      }
    };

    loadAds();

    return () => {
      if (adRef.current) {
        adRef.current.innerHTML = "";
      }
    };
  }, [location.key]);

  if (import.meta.env.DEV) {
    return (
      <div
        className="m-5 border-2 border-dashed border-gray-400 text-gray-600"
        id="starlight-ad"
      >
        <p className="w-[728px] h-[90px] m-0 p-5">Ad Placeholder</p>
      </div>
    );
  }

  return (
    <div ref={adRef} id="starlight-ad" className="m-5" key={location.key}></div>
  );
}

function NativeBannerAd() {
  const adRef = useRef(null);
  const location = useLocation();
  const containerId = "container-e76624778e61e112831f9230df244d7e";

  useEffect(() => {
    if (import.meta.env.DEV) return;

    const existingContainer = document.getElementById(containerId);
    if (existingContainer && existingContainer !== adRef.current) {
      existingContainer.remove();
    }

    const existingScripts = document.querySelectorAll(
      `script[src*="e76624778e61e112831f9230df244d7e"]`
    );
    existingScripts.forEach((script) => script.remove());

    if (!adRef.current.hasChildNodes()) {
      const container = document.createElement("div");
      container.id = containerId;
      adRef.current.appendChild(container);
    }

    const loadAds = () => {
      const script = document.createElement("script");
      script.async = true;
      script.setAttribute("data-cfasync", "false");
      script.src =
        "//rethinkexercisesupplement.com/e76624778e61e112831f9230df244d7e/invoke.js";

      document.body.appendChild(script);
    };

    setTimeout(loadAds, 50);

    return () => {
      if (adRef.current) {
        adRef.current.innerHTML = "";
      }
      const scripts = document.querySelectorAll(
        `script[src*="e76624778e61e112831f9230df244d7e"]`
      );
      scripts.forEach((script) => script.remove());
    };
  }, [location.key]);

  return <div ref={adRef} className="m-5" key={location.key}></div>;
}

function SocialBarAd() {
  const adRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.DEV) return;

    const loadAds = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "//rethinkexercisesupplement.com/66/a6/77/66a67752b43ac5e91458b1e7fba5c885.js";

      if (adRef.current) {
        adRef.current.innerHTML = "";
        adRef.current.appendChild(script);
      }
    };

    loadAds();

    return () => {
      if (adRef.current) {
        adRef.current.innerHTML = "";
      }
    };
  }, [location.key]);

  return <div ref={adRef} id="social-bar-ad" key={location.key}></div>;
}

export { Ad, BannerAd, NativeBannerAd, SocialBarAd };
