import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'AI & Automation for Modern Businesses';
  const description = searchParams.get('description') || 'Help modern businesses grow faster and operate smarter.';

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Decorative orbs */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            left: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(37, 99, 235, 0.25)',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            right: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(124, 58, 237, 0.25)',
            filter: 'blur(80px)',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <span
            style={{
              fontSize: '28px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #2563eb, #7c3aed, #06b6d4)',
              backgroundClip: 'text',
              color: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            SysPara
          </span>
          <span
            style={{
              marginLeft: '16px',
              fontSize: '13px',
              color: 'rgba(148, 163, 184, 0.8)',
              border: '1px solid rgba(99, 102, 241, 0.4)',
              borderRadius: '999px',
              padding: '4px 14px',
            }}
          >
            AI & Automation
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 50 ? '44px' : '52px',
            fontWeight: 'bold',
            color: '#f1f5f9',
            lineHeight: 1.15,
            marginBottom: '24px',
            maxWidth: '900px',
          }}
        >
          {title}
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: '22px',
            color: 'rgba(148, 163, 184, 0.9)',
            lineHeight: 1.5,
            maxWidth: '800px',
          }}
        >
          {description}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '80px',
            right: '80px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '16px', color: 'rgba(100, 116, 139, 0.8)' }}>syspara.in</span>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['500+ Projects', '10+ Years', '98% Satisfaction'].map((stat) => (
              <span
                key={stat}
                style={{
                  fontSize: '14px',
                  color: 'rgba(148, 163, 184, 0.7)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  padding: '6px 14px',
                }}
              >
                {stat}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
