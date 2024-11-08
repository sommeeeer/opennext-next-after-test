import { unstable_after as after } from 'next/server';

export async function GET() {
  console.log('hi ho');
  after(async () => {
    console.log('after start');
    const now = new Date();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await fetch('http://localhost:3030?date=' + now.toISOString());
    console.log('after end');
  });
  return Response.json({ status: 'ok' });
}
