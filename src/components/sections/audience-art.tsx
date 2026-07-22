/**
 * Editorial, minimal brand illustrations for the "Who we work with" cards.
 * No photography — clean geometric line/fill art in the Agamana palette
 * (teal #04303B, lime #E7F352, cream #E3E4D4, paper #F2F3EE).
 *
 * Hover behaviour is driven by the parent `.group` (see AudienceCards):
 * `.art-float` gives a gentle idle motion; individual parts shift on hover.
 */

const INK = "#04303B";
const LIME = "#E7F352";
const CREAM = "#E3E4D4";
const PAPER = "#F2F3EE";

const lift =
  "origin-center [transform-box:fill-box] transition-transform duration-500 ease-[var(--ease-out-soft)]";

export function LandOwnerArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 300" fill="none" className={className} role="img" aria-hidden>
      {/* halo */}
      <circle cx="180" cy="140" r="118" fill={CREAM} opacity="0.55" />

      <g className="art-float">
        {/* the deed, held up */}
        <g className={`${lift} group-hover:-translate-y-2`}>
          <rect
            x="98"
            y="52"
            width="164"
            height="158"
            rx="12"
            fill="#ffffff"
            stroke={INK}
            strokeOpacity="0.1"
          />
          {/* title lines */}
          <rect x="116" y="72" width="64" height="9" rx="4.5" fill={INK} opacity="0.85" />
          <rect x="116" y="90" width="112" height="6" rx="3" fill={INK} opacity="0.16" />

          {/* plot map */}
          <rect x="116" y="112" width="128" height="66" rx="5" fill={PAPER} />
          <rect x="160" y="112" width="42" height="32" fill={LIME} opacity="0.55" />
          <g stroke={INK} strokeOpacity="0.16" strokeWidth="1.4">
            <line x1="160" y1="112" x2="160" y2="178" />
            <line x1="202" y1="112" x2="202" y2="178" />
            <line x1="116" y1="144" x2="244" y2="144" />
          </g>
          {/* road */}
          <path d="M116 144 H244" stroke={INK} strokeOpacity="0.32" strokeWidth="3" />

          {/* seal */}
          <g className={`art-seal ${lift} group-hover:scale-110`}>
            <circle cx="224" cy="166" r="14" fill={LIME} />
            <path
              d="M218 166 l4 4 l8 -8"
              stroke={INK}
              strokeWidth="2.4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* location pin */}
          <g className={`art-pin origin-bottom [transform-box:fill-box] transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:-translate-y-1.5`}>
            <path
              d="M181 118 c-9 0 -16 7 -16 16 c0 11 16 24 16 24 c0 0 16 -13 16 -24 c0 -9 -7 -16 -16 -16 Z"
              fill={INK}
            />
            <circle cx="181" cy="134" r="5.5" fill={LIME} />
          </g>
        </g>

        {/* hands holding the deed */}
        <g fill={INK}>
          <rect x="118" y="196" width="36" height="50" rx="18" />
          <rect x="206" y="196" width="36" height="50" rx="18" />
        </g>
        <g fill={LIME}>
          <rect x="118" y="232" width="36" height="11" rx="5.5" />
          <rect x="206" y="232" width="36" height="11" rx="5.5" />
        </g>
      </g>
    </svg>
  );
}

export function DeveloperArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 300" fill="none" className={className} role="img" aria-hidden>
      {/* halo */}
      <circle cx="180" cy="140" r="118" fill={CREAM} opacity="0.55" />

      <g className="art-float">
        {/* rolled drawing behind */}
        <g transform="rotate(-14 250 96)">
          <rect x="214" y="70" width="86" height="20" rx="10" fill={PAPER} stroke={INK} strokeOpacity="0.1" />
          <circle cx="214" cy="80" r="10" fill="#ffffff" stroke={INK} strokeOpacity="0.15" />
          <circle cx="214" cy="80" r="3.5" fill={LIME} />
        </g>

        {/* site-plan sheet */}
        <g className={`art-sheet ${lift} group-hover:-translate-y-1.5`} transform="rotate(-3 180 168)">
          <rect
            x="60"
            y="96"
            width="240"
            height="150"
            rx="12"
            fill="#ffffff"
            stroke={INK}
            strokeOpacity="0.1"
          />
          {/* green space */}
          <rect x="76" y="112" width="70" height="52" rx="6" fill={LIME} opacity="0.35" />
          {/* plots grid */}
          <g stroke={INK} strokeOpacity="0.14" strokeWidth="1.4">
            <rect x="160" y="112" width="124" height="52" rx="4" fill={PAPER} />
            <line x1="201" y1="112" x2="201" y2="164" />
            <line x1="242" y1="112" x2="242" y2="164" />
            <line x1="160" y1="138" x2="284" y2="138" />
          </g>
          {/* roads */}
          <path d="M76 178 H284" stroke={INK} strokeOpacity="0.3" strokeWidth="5" />
          <path d="M150 112 V246" stroke={INK} strokeOpacity="0.3" strokeWidth="5" />
          {/* roundabout */}
          <circle cx="150" cy="178" r="12" fill="#ffffff" stroke={INK} strokeOpacity="0.3" strokeWidth="4" />
          <circle cx="150" cy="178" r="3" fill={LIME} />
          {/* lower plots */}
          <g stroke={INK} strokeOpacity="0.14" strokeWidth="1.4">
            <line x1="192" y1="192" x2="192" y2="230" />
            <line x1="230" y1="192" x2="230" y2="230" />
            <line x1="268" y1="192" x2="268" y2="230" />
          </g>
        </g>

        {/* set square */}
        <g className={`art-tool ${lift} group-hover:rotate-6`}>
          <path d="M96 214 L156 214 L96 254 Z" fill={LIME} opacity="0.9" />
          <path d="M104 218 L140 218 L104 244 Z" fill="#ffffff" />
        </g>

        {/* hand + pen, reviewing */}
        <g className={`art-pen ${lift} group-hover:translate-x-1.5 group-hover:-translate-y-1`}>
          <rect
            x="228"
            y="150"
            width="10"
            height="70"
            rx="5"
            fill={LIME}
            transform="rotate(38 233 185)"
          />
          <path
            d="M244 214 l14 -11 l6 8 l-14 11 Z"
            fill={INK}
            transform="rotate(38 250 213)"
          />
          <rect x="250" y="214" width="44" height="26" rx="13" fill={INK} />
        </g>
      </g>
    </svg>
  );
}
