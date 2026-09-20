export function Hairlines({ night }: { night: boolean }) {
  const stroke = night ? "rgba(232,255,74,0.18)" : "rgba(18,20,15,0.12)";
  return (
    <svg className="hairline" viewBox="0 0 1440 900" preserveAspectRatio="none">
      <path
        d="M-40 220 C 280 80, 520 340, 820 210 S 1280 40, 1500 180"
        fill="none"
        stroke={stroke}
        strokeWidth="1.1"
      />
      <path
        d="M-40 640 C 360 780, 640 500, 980 690 S 1300 820, 1500 640"
        fill="none"
        stroke={stroke}
        strokeWidth="1.1"
      />
    </svg>
  );
}
