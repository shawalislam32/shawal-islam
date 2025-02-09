import { connectDB } from '@/lib/connectDB';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const db = await connectDB();
  const skillsCollection = db?.collection('skills');

  try {
    const res = await skillsCollection?.find({}).toArray();
    return NextResponse.json(
      { message: 'Get successfull', res: res },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Something went wrong', error },
      { status: 500 },
    );
  }
};
