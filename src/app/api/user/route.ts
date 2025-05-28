import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { v4 as uuidv4 } from 'uuid';

export async function  GET() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;
  if (userId) {
    return NextResponse.json({ userId });
  } else {
    const newId = uuidv4();
    const response = NextResponse.json({ userId: newId });

response.cookies.set("userId", newId, {
  path: "/",
});


    return response;
  }
}
