const NODES = [
  'Strategic Intent',
  'Blueprint',
  'GTM Plays',
  'Assets',
  'Insights',
  'Optimization',
] as const;

export default function OperatingLoop() {
  return (
    <div style={{
      background: '#FFFFFF',
      border: '1px solid rgba(0,0,0,0.08)',
      borderRadius: 12,
      padding: 28,
      position: 'relative',
      width: '100%',
      boxSizing: 'border-box',
      overflow: 'hidden',
    }}>
      {/* node list */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        width: '100%',
      }}>
        {NODES.map((label, i) => {
          const isLast = i === NODES.length - 1;
          return (
            <div key={label}>
              <div style={{
                height: 44,
                minHeight: 0,
                flexShrink: 0,
                width: '90%',
                background: '#1A1A18',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                paddingLeft: 16,
                boxSizing: 'border-box',
                fontSize: 15,
                fontWeight: 500,
                color: '#FFFFFF',
              }}>
                {label}
              </div>
              {!isLast && (
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 10,
                }}>
                  <svg width="10" height="8" viewBox="0 0 10 8">
                    <polygon points="5,8 0,0 10,0" fill="#E8521A" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* return arrow */}
      <svg
        width="60"
        height="314"
        viewBox="0 0 60 314"
        style={{
          position: 'absolute',
          right: 0,
          top: 28,
          overflow: 'visible',
          pointerEvents: 'none',
        }}
      >
        <path
          d="M 12,314 C 48,314 48,32 12,32"
          stroke="#E8521A"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
        <polygon
          points="12,22 7,32 17,32"
          fill="#E8521A"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}
