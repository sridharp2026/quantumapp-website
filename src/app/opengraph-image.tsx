import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'QuantumApps.AI – AI Platform for Government Operations'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #200055 0%, #1a0045 50%, #160038 100%)',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow orbs */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -150,
            right: -100,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 24,
            padding: '0 80px',
            textAlign: 'center',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(245,158,11,0.15)',
              border: '1px solid rgba(245,158,11,0.4)',
              borderRadius: 100,
              padding: '8px 20px',
            }}
          >
            <span style={{ color: '#F59E0B', fontSize: 14, fontWeight: 600, letterSpacing: 1 }}>
              FEDRAMP AUTHORIZED
            </span>
          </div>

          {/* Title */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span
              style={{
                fontSize: 72,
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.1,
                letterSpacing: -2,
              }}
            >
              QuantumApps
              <span style={{ color: '#F59E0B' }}>.AI</span>
            </span>
            <span
              style={{
                fontSize: 28,
                color: 'rgba(255,255,255,0.65)',
                fontWeight: 400,
                letterSpacing: 0.5,
              }}
            >
              AI Platform for Government Operations
            </span>
          </div>

          {/* Description */}
          <span
            style={{
              fontSize: 20,
              color: 'rgba(255,255,255,0.45)',
              maxWidth: 800,
              lineHeight: 1.5,
            }}
          >
            Modernize legacy systems · Automate workflows · Improve citizen services
          </span>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 18 }}>quantumapps.ai</span>
        </div>
      </div>
    ),
    size,
  )
}
