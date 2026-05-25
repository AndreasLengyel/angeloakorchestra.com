import { ReactNode } from 'react';

export type MemberKey =
  | 'andreas-petersson'
  | 'fideli-jonsson'
  | 'magnus-petersson'
  | 'andreas-lengyel'
  | 'vlado-markovic'
  | 'robin-averling';

type Palette = {
  bgFrom: string;
  bgTo: string;
  ink: string;      // outline / silhouette
  accent: string;   // pop color (instrument highlights, sun, etc.)
  paper: string;   // negative-space / shirt
};

const palettes: Record<MemberKey, Palette> = {
  'fideli-jonsson':    { bgFrom: '#e8b878', bgTo: '#c9a227', ink: '#1a2e1a', accent: '#f5f0e8', paper: '#f5f0e8' },
  'magnus-petersson':  { bgFrom: '#4a6741', bgTo: '#2d4a2d', ink: '#1a2e1a', accent: '#d4a574', paper: '#f5f0e8' },
  'andreas-petersson': { bgFrom: '#c9a227', bgTo: '#8a5a2a', ink: '#1a2e1a', accent: '#f5f0e8', paper: '#d4a574' },
  'andreas-lengyel':   { bgFrom: '#5c8a5c', bgTo: '#1a2e1a', ink: '#1a2e1a', accent: '#d4a574', paper: '#f5f0e8' },
  'vlado-markovic':    { bgFrom: '#2d4a2d', bgTo: '#1a2e1a', ink: '#1a2e1a', accent: '#d4a574', paper: '#f5f0e8' },
  'robin-averling':    { bgFrom: '#3d5a3d', bgTo: '#1a2e1a', ink: '#1a2e1a', accent: '#c9a227', paper: '#f5f0e8' },
};

// ============================================================
// SHARED FRAME — every portrait wraps in this so the cards feel
// like a deck of cards from the same printer.
// ============================================================
function Frame({
  member,
  children,
}: {
  member: MemberKey;
  children: ReactNode;
}) {
  const p = palettes[member];
  const gradientId = `bg-${member}`;
  const dotsId = `dots-${member}`;
  const sunburstId = `sun-${member}`;
  return (
    <svg
      viewBox="0 0 300 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full block"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.bgFrom} />
          <stop offset="100%" stopColor={p.bgTo} />
        </linearGradient>
        <pattern id={dotsId} patternUnits="userSpaceOnUse" width="10" height="10">
          <circle cx="5" cy="5" r="1.4" fill={p.ink} opacity="0.18" />
        </pattern>
        <radialGradient id={sunburstId} cx="0.5" cy="0.35" r="0.6">
          <stop offset="0%" stopColor={p.accent} stopOpacity="0.5" />
          <stop offset="100%" stopColor={p.accent} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Paper */}
      <rect width="300" height="400" fill={`url(#${gradientId})`} />
      <rect width="300" height="400" fill={`url(#${sunburstId})`} />
      <rect width="300" height="400" fill={`url(#${dotsId})`} />

      {/* Member-specific illustration */}
      {children}

      {/* Frame border — comic-panel feel */}
      <rect
        x="6"
        y="6"
        width="288"
        height="388"
        fill="none"
        stroke={p.ink}
        strokeWidth="3"
        opacity="0.85"
      />
      <rect
        x="12"
        y="12"
        width="276"
        height="376"
        fill="none"
        stroke={p.accent}
        strokeWidth="1"
        opacity="0.55"
      />
    </svg>
  );
}

// ============================================================
// INDIVIDUAL ILLUSTRATIONS
// Each one: silhouette + iconic instrument, hand-drawn poster feel.
// ============================================================

function FideliIllustration() {
  const p = palettes['fideli-jonsson'];
  return (
    <g className="portrait-float">
      {/* Sun halo behind */}
      <circle cx="150" cy="155" r="78" fill={p.accent} opacity="0.55" />
      {/* Hair flowing wide */}
      <path
        d="M 92 175 Q 70 250 80 340 Q 110 320 120 290 L 120 220 Z
           M 208 175 Q 230 250 220 340 Q 190 320 180 290 L 180 220 Z"
        fill={p.ink}
        opacity="0.95"
      />
      {/* Shoulders / dress */}
      <path
        d="M 70 400 Q 60 330 110 305 Q 150 295 190 305 Q 240 330 230 400 Z"
        fill={p.ink}
      />
      {/* Floral dress accent */}
      <circle cx="120" cy="360" r="8" fill={p.accent} opacity="0.7" />
      <circle cx="160" cy="345" r="6" fill={p.paper} opacity="0.6" />
      <circle cx="190" cy="370" r="7" fill={p.accent} opacity="0.7" />
      {/* Neck */}
      <rect x="138" y="245" width="24" height="60" fill={p.ink} />
      {/* Face — empty silhouette */}
      <ellipse cx="150" cy="225" rx="36" ry="42" fill={p.ink} />
      {/* Hat brim — wide */}
      <ellipse cx="150" cy="180" rx="88" ry="11" fill={p.ink} />
      <ellipse cx="150" cy="178" rx="85" ry="6" fill={p.accent} opacity="0.4" />
      {/* Hat crown */}
      <path
        d="M 112 180 Q 110 138 150 132 Q 190 138 188 180 Z"
        fill={p.ink}
      />
      {/* Microphone in front */}
      <line x1="150" y1="330" x2="150" y2="395" stroke={p.accent} strokeWidth="4" />
      <ellipse cx="150" cy="325" rx="14" ry="18" fill={p.accent} stroke={p.ink} strokeWidth="2.5" />
      <line x1="142" y1="320" x2="158" y2="320" stroke={p.ink} strokeWidth="1.5" opacity="0.7" />
      <line x1="142" y1="328" x2="158" y2="328" stroke={p.ink} strokeWidth="1.5" opacity="0.7" />
    </g>
  );
}

function MagnusIllustration() {
  const p = palettes['magnus-petersson'];
  return (
    <g className="portrait-float">
      {/* Mountain backdrop */}
      <path
        d="M 0 260 L 60 180 L 110 240 L 170 150 L 230 230 L 300 170 L 300 400 L 0 400 Z"
        fill={p.ink}
        opacity="0.35"
      />
      {/* Sun */}
      <circle cx="150" cy="120" r="38" fill={p.accent} opacity="0.7" />
      {/* Body + crossed arms */}
      <path
        d="M 80 400 Q 70 340 110 320 L 110 270 Q 90 260 90 245
           Q 90 235 110 235 L 190 235 Q 210 235 210 245
           Q 210 260 190 270 L 190 320 Q 230 340 220 400 Z"
        fill={p.ink}
      />
      {/* Arms crossed — small accent */}
      <path
        d="M 100 260 Q 150 285 200 260 L 195 275 Q 150 295 105 275 Z"
        fill={p.accent}
        opacity="0.6"
      />
      {/* Neck */}
      <rect x="138" y="195" width="24" height="50" fill={p.ink} />
      {/* Head */}
      <ellipse cx="150" cy="175" rx="35" ry="40" fill={p.ink} />
      {/* Short gray hair — paper highlight */}
      <path
        d="M 117 155 Q 130 138 150 138 Q 170 138 183 155 Q 175 150 150 152 Q 125 150 117 155 Z"
        fill={p.paper}
        opacity="0.25"
      />
      {/* Piano-key strip at bottom */}
      <g>
        <rect x="40" y="360" width="220" height="32" fill={p.paper} stroke={p.ink} strokeWidth="2" />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <line
            key={i}
            x1={40 + (i + 1) * 22}
            y1="360"
            x2={40 + (i + 1) * 22}
            y2="392"
            stroke={p.ink}
            strokeWidth="1.5"
          />
        ))}
        {[0, 2, 3, 5, 6].map((i) => (
          <rect
            key={i}
            x={40 + (i + 1) * 22 - 7}
            y="360"
            width="14"
            height="20"
            fill={p.ink}
          />
        ))}
      </g>
    </g>
  );
}

function AndreasPeterssonIllustration() {
  const p = palettes['andreas-petersson'];
  return (
    <g className="portrait-float">
      {/* Plaid background blocks */}
      <g opacity="0.25">
        <rect x="0" y="280" width="300" height="120" fill={p.ink} />
        <rect x="0" y="280" width="60" height="120" fill={p.accent} opacity="0.4" />
        <rect x="120" y="280" width="60" height="120" fill={p.accent} opacity="0.4" />
        <rect x="240" y="280" width="60" height="120" fill={p.accent} opacity="0.4" />
        <line x1="0" y1="340" x2="300" y2="340" stroke={p.accent} strokeWidth="2" opacity="0.4" />
      </g>
      {/* Shoulders */}
      <path
        d="M 70 400 Q 60 330 110 300 L 190 300 Q 240 330 230 400 Z"
        fill={p.ink}
      />
      {/* Neck */}
      <rect x="138" y="240" width="24" height="62" fill={p.ink} />
      {/* Head */}
      <ellipse cx="150" cy="220" rx="36" ry="40" fill={p.ink} />
      {/* Beard */}
      <path
        d="M 118 230 Q 150 270 182 230 Q 175 252 150 258 Q 125 252 118 230 Z"
        fill={p.ink}
      />
      {/* Trucker cap — brim */}
      <ellipse cx="150" cy="190" rx="44" ry="8" fill={p.ink} />
      {/* Cap crown */}
      <path
        d="M 112 188 Q 110 152 150 148 Q 190 152 188 188 Z"
        fill={p.accent}
        stroke={p.ink}
        strokeWidth="2"
      />
      {/* Cap patch */}
      <circle cx="150" cy="170" r="11" fill={p.ink} />
      <circle cx="150" cy="170" r="7" fill={p.accent} />
      {/* Guitar headstock peeking */}
      <g transform="translate(220, 340) rotate(-20)">
        <rect x="-8" y="-30" width="16" height="50" fill={p.accent} stroke={p.ink} strokeWidth="2" />
        <circle cx="-3" cy="-20" r="2" fill={p.ink} />
        <circle cx="3" cy="-20" r="2" fill={p.ink} />
        <circle cx="-3" cy="-10" r="2" fill={p.ink} />
        <circle cx="3" cy="-10" r="2" fill={p.ink} />
      </g>
    </g>
  );
}

function AndreasLengyelIllustration() {
  const p = palettes['andreas-lengyel'];
  return (
    <g className="portrait-float">
      {/* Horizon */}
      <rect x="0" y="240" width="300" height="160" fill={p.ink} opacity="0.35" />
      <line x1="0" y1="240" x2="300" y2="240" stroke={p.accent} strokeWidth="1.5" opacity="0.6" />
      {/* Wavy hair */}
      <path
        d="M 105 200 Q 95 150 120 130 Q 150 110 180 130 Q 205 150 195 200
           Q 200 170 185 165 Q 200 195 170 200 Q 150 175 130 200 Q 100 195 115 165
           Q 100 170 105 200 Z"
        fill={p.ink}
      />
      {/* Body */}
      <path
        d="M 75 400 Q 65 330 110 300 L 190 300 Q 235 330 225 400 Z"
        fill={p.ink}
      />
      {/* Neck */}
      <rect x="138" y="240" width="24" height="62" fill={p.ink} />
      {/* Head */}
      <ellipse cx="150" cy="220" rx="36" ry="40" fill={p.ink} />
      {/* Smile hint */}
      <path
        d="M 132 232 Q 150 248 168 232"
        stroke={p.accent}
        strokeWidth="2.5"
        fill="none"
        opacity="0.8"
      />
      {/* Piano keys + mic combined — keys strip below */}
      <g transform="translate(35, 355)">
        <rect width="100" height="32" fill={p.paper} stroke={p.ink} strokeWidth="2" />
        {[1, 2, 3, 4].map((i) => (
          <line key={i} x1={i * 20} y1="0" x2={i * 20} y2="32" stroke={p.ink} strokeWidth="1.5" />
        ))}
        {[0, 2].map((i) => (
          <rect key={i} x={(i + 1) * 20 - 6} width="12" height="20" fill={p.ink} />
        ))}
      </g>
      {/* Mic on right */}
      <g transform="translate(225, 360)">
        <line x1="0" y1="0" x2="0" y2="35" stroke={p.accent} strokeWidth="3" />
        <ellipse cx="0" cy="-5" rx="11" ry="14" fill={p.accent} stroke={p.ink} strokeWidth="2" />
      </g>
    </g>
  );
}

function VladoIllustration() {
  const p = palettes['vlado-markovic'];
  return (
    <g className="portrait-float">
      {/* Foliage suggestion */}
      <g opacity="0.4">
        <circle cx="40" cy="100" r="38" fill={p.accent} opacity="0.3" />
        <circle cx="260" cy="80" r="42" fill={p.accent} opacity="0.3" />
        <circle cx="20" cy="200" r="32" fill={p.accent} opacity="0.25" />
      </g>
      {/* Body — tank top */}
      <path
        d="M 90 400 Q 90 320 120 290 L 120 270
           Q 100 268 100 250 L 200 250 Q 200 268 180 270 L 180 290
           Q 210 320 210 400 Z"
        fill={p.ink}
      />
      {/* Neck */}
      <rect x="140" y="225" width="20" height="35" fill={p.ink} />
      {/* Head — bald, accentuated highlight */}
      <ellipse cx="150" cy="200" rx="40" ry="44" fill={p.ink} />
      <ellipse cx="138" cy="175" rx="14" ry="18" fill={p.accent} opacity="0.25" />
      {/* Bass guitar — prominent across the front */}
      <g transform="translate(150, 345) rotate(-15)">
        {/* Body */}
        <ellipse cx="-15" cy="0" rx="55" ry="40" fill={p.accent} stroke={p.ink} strokeWidth="2.5" />
        <ellipse cx="-15" cy="0" rx="55" ry="40" fill={p.accent} />
        {/* Pickup */}
        <rect x="-25" y="-6" width="35" height="12" fill={p.ink} />
        {/* Neck */}
        <rect x="35" y="-7" width="80" height="14" fill={p.ink} />
        {/* Headstock */}
        <path d="M 115 -10 L 140 -14 L 140 18 L 115 14 Z" fill={p.accent} stroke={p.ink} strokeWidth="2" />
        {/* Frets */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <line key={i} x1={35 + i * 11} y1="-7" x2={35 + i * 11} y2="7" stroke={p.paper} strokeWidth="1" opacity="0.5" />
        ))}
        {/* Strings */}
        {[-3, 0, 3].map((y) => (
          <line key={y} x1="-50" y1={y} x2="115" y2={y} stroke={p.paper} strokeWidth="0.7" opacity="0.7" />
        ))}
      </g>
    </g>
  );
}

function RobinIllustration() {
  const p = palettes['robin-averling'];
  return (
    <g className="portrait-float">
      {/* Halftone burst */}
      <circle cx="150" cy="170" r="90" fill={p.accent} opacity="0.18" />
      {/* Body */}
      <path
        d="M 70 400 Q 60 330 115 300 L 185 300 Q 240 330 230 400 Z"
        fill={p.ink}
      />
      {/* Neck */}
      <rect x="138" y="235" width="24" height="62" fill={p.ink} />
      {/* Head — slight profile angle (offset to one side) */}
      <ellipse cx="160" cy="210" rx="38" ry="42" fill={p.ink} />
      {/* Beard */}
      <path
        d="M 128 222 Q 160 260 192 222 Q 185 248 160 254 Q 135 248 128 222 Z"
        fill={p.ink}
      />
      {/* Short hair top */}
      <path
        d="M 124 188 Q 135 168 160 168 Q 188 168 195 188 Q 185 178 160 180 Q 138 178 124 188 Z"
        fill={p.ink}
      />
      {/* Drumsticks crossing in foreground */}
      <g transform="translate(150, 360)">
        <rect x="-58" y="-3" width="116" height="6" fill={p.paper} stroke={p.ink} strokeWidth="2" transform="rotate(20)" />
        <circle cx="-58" cy="0" r="5" fill={p.paper} stroke={p.ink} strokeWidth="2" transform="rotate(20) translate(0,0)" />
        <rect x="-58" y="-3" width="116" height="6" fill={p.paper} stroke={p.ink} strokeWidth="2" transform="rotate(-20)" />
        <circle cx="58" cy="0" r="5" fill={p.paper} stroke={p.ink} strokeWidth="2" transform="rotate(-20) translate(0,0)" />
      </g>
      {/* Cymbal hint */}
      <ellipse cx="60" cy="350" rx="40" ry="6" fill={p.accent} opacity="0.55" stroke={p.ink} strokeWidth="1.5" />
    </g>
  );
}

const illustrations: Record<MemberKey, () => ReactNode> = {
  'fideli-jonsson': FideliIllustration,
  'magnus-petersson': MagnusIllustration,
  'andreas-petersson': AndreasPeterssonIllustration,
  'andreas-lengyel': AndreasLengyelIllustration,
  'vlado-markovic': VladoIllustration,
  'robin-averling': RobinIllustration,
};

export default function MemberPortrait({ member }: { member: MemberKey }) {
  const Illustration = illustrations[member];
  return (
    <Frame member={member}>
      <Illustration />
    </Frame>
  );
}
