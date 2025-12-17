export default function GradientIcon({ Icon, size = 36, id }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36">
      <defs>
        <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A068C1" />
          <stop offset="100%" stopColor="#BD3E69" />
        </linearGradient>
      </defs>

      {Icon && (
        <Icon
          size={size}
          stroke={`url(#grad-${id})`}
          strokeWidth={2}
        />
      )}
    </svg>
  );
}
