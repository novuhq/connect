import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const response = NextResponse.next();
  if (request.url.indexOf('?via=') > -1) {
    response.cookies.set({
      name: 'via',
      value: new URL(request.url).searchParams.get('via'),
      httpOnly: true,
    });
  }
  return response;
}
