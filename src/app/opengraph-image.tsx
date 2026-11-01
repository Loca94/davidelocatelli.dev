import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'Davide Locatelli - Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const fontsDir = join(process.cwd(), 'node_modules/geist/dist/fonts/geist-sans');
  const [geistRegular, geistMedium] = await Promise.all([
    readFile(join(fontsDir, 'Geist-Regular.ttf')),
    readFile(join(fontsDir, 'Geist-Medium.ttf')),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          padding: '0 96px',
          backgroundColor: '#0a0a0a',
          backgroundImage:
            'radial-gradient(circle at 85% 15%, rgba(16, 185, 129, 0.25), transparent 45%)',
          fontFamily: 'Geist',
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 500, color: '#fafafa' }}>
          Davide Locatelli
        </div>
        <div style={{ marginTop: 16, fontSize: 40, color: '#737373' }}>
          Software Engineer
        </div>
        <div
          style={{
            marginTop: 56,
            fontSize: 28,
            color: '#10b981',
          }}
        >
          davidelocatelli.dev
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Geist', data: geistRegular, weight: 400, style: 'normal' },
        { name: 'Geist', data: geistMedium, weight: 500, style: 'normal' },
      ],
    },
  );
}
