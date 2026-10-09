import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest) {
  const country =
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('cf-ipcountry') ||
    '';

  const acceptLang = request.headers.get('accept-language') || '';

  const isTurkish =
    country.toUpperCase() === 'TR' ||
    acceptLang.toLowerCase().includes('tr');

  return NextResponse.json({
    country,
    locale: isTurkish ? 'tr' : 'en',
  });
}
