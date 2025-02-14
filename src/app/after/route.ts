import { after } from 'next/server';

export async function GET() {
  console.log('hi ho');
  after(() => console.log('after'));
  after(() =>
    setTimeout(
      () => console.log('after timeout, time: ' + new Date().toISOString()),
      5000
    )
  );
  return Response.json({ status: 'ok', time: new Date().toISOString() });
}
