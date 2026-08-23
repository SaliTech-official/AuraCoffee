/**
 * ============================================================
 * SaliTech Credit Bar (JSX Version - Standalone with Auto-Font)
 * ============================================================
 * @author SaliTech
 * @website https://salitech.ir
 * ============================================================
 */

import { useEffect, useRef } from "react";

export const CreditBar = ({
  href = "https://salitech.ir",
  text = "طراحی و توسعه توسط",
  brand = "SaliTech",
  accentColor = "#00BFA6",
  className = "",
}) => {
  const styleRef = useRef(null);

  // ============ Inject styles & font once ============
  useEffect(() => {
    const existingStyle = document.getElementById("salitech-credit-bar-styles");
    if (existingStyle) {
      styleRef.current = existingStyle;
      return;
    }

    const style = document.createElement("style");
    style.id = "salitech-credit-bar-styles";
    style.textContent = `
      /* ============ Auto Load Vazirmatn Font ============ */
      @import url('https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css');

      /* ============ Credit Bar Root ============ */
      .stc-credit-bar {
        display: block;
        width: 100%;
        background-color: #000000;
        color: #ffffff;
        padding: 14px 20px;
        position: relative;
        overflow: hidden;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        transition: all 0.5s ease;
        cursor: pointer;
        text-decoration: none;
        font-family: 'Vazirmatn', system-ui, -apple-system, BlinkMacSystemFont, sans-serif !important;
        box-sizing: border-box;
        direction: rtl;
      }

      @media (min-width: 768px) {
        .stc-credit-bar {
          padding: 16px 40px;
        }
      }

      /* ============ Top Border Glow ============ */
      .stc-credit-bar::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(
          90deg,
          transparent 0%,
          var(--stc-accent-transparent) 20%,
          var(--stc-accent) 50%,
          var(--stc-accent-transparent) 80%,
          transparent 100%
        );
        opacity: 0;
        transition: opacity 0.5s ease;
      }

      .stc-credit-bar:hover::before {
        opacity: 1;
      }

      /* ============ Background Glow ============ */
      .stc-credit-bar__glow {
        position: absolute;
        inset: 0;
        pointer-events: none;
        opacity: 0.25;
        transition: opacity 0.5s ease;
        background: radial-gradient(
          ellipse at 50% 100%,
          var(--stc-accent-glow) 0%,
          transparent 70%
        );
      }

      .stc-credit-bar:hover .stc-credit-bar__glow {
        opacity: 0.7;
      }

      /* ============ Sweep Line ============ */
      .stc-credit-bar__sweep {
        position: absolute;
        top: 0;
        bottom: 0;
        right: -100%;
        width: 50%;
        pointer-events: none;
        background: linear-gradient(
          90deg,
          transparent 0%,
          var(--stc-accent-sweep) 50%,
          transparent 100%
        );
        transition: transform 1.2s ease-out;
      }

      .stc-credit-bar:hover .stc-credit-bar__sweep {
        transform: translateX(-300%);
      }

      /* ============ Content Container ============ */
      .stc-credit-bar__content {
        position: relative;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 1440px;
        margin: 0 auto;
      }

      /* ============ Text ============ */
      .stc-credit-bar__text {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.6);
        user-select: none;
        letter-spacing: 0.02em;
        transition: color 0.3s ease;
        margin: 0;
        line-height: 1.5;
        text-align: center;
      }

      @media (min-width: 768px) {
        .stc-credit-bar__text {
          font-size: 14px;
        }
      }

      .stc-credit-bar:hover .stc-credit-bar__text {
        color: rgba(255, 255, 255, 0.8);
      }

      /* ============ Brand Name ============ */
      .stc-credit-bar__brand {
        position: relative;
        display: inline-block;
        font-weight: 700;
        color: #ffffff;
        margin-right: 6px;
        transition: all 0.3s ease;
      }

      .stc-credit-bar:hover .stc-credit-bar__brand {
        letter-spacing: 0.08em;
        background: linear-gradient(
          90deg,
          #ffffff 0%,
          var(--stc-accent) 50%,
          #ffffff 100%
        );
        background-size: 200% auto;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: stc-shimmer 2.5s linear infinite;
      }

      @keyframes stc-shimmer {
        0% {
          background-position: 0% center;
        }
        100% {
          background-position: 200% center;
        }
      }
    `;

    document.head.appendChild(style);
    styleRef.current = style;

    return () => {
      const bars = document.querySelectorAll(".stc-credit-bar");
      if (bars.length === 0 && styleRef.current) {
        styleRef.current.remove();
      }
    };
  }, []);

  const cssVars = {
    "--stc-accent": accentColor,
    "--stc-accent-transparent": `${accentColor}00`,
    "--stc-accent-glow": `${accentColor}26`,
    "--stc-accent-sweep": `${accentColor}1A`,
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${text} ${brand}`}
      className={`stc-credit-bar ${className}`.trim()}
      style={cssVars}
    >
      <div className="stc-credit-bar__glow" aria-hidden="true" />
      <div className="stc-credit-bar__sweep" aria-hidden="true" />
      <div className="stc-credit-bar__content">
        <p className="stc-credit-bar__text">
          {text} <span className="stc-credit-bar__brand">{brand}</span>
        </p>
      </div>
    </a>
  );
};
