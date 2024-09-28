import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  console.log('POST request received at /api/contact');
  console.log('Environment variables:', {
    NEXT_APP_EMAIL: process.env.NEXT_APP_EMAIL ? '[SET]' : '[NOT SET]',
    NEXT_APP_PWD: process.env.NEXT_APP_PWD ? '[SET]' : '[NOT SET]',
  });

  try {
    const body = await request.json();
    console.log('Request body:', body);

    console.log('Attempting to send email...');
    const result = await sendEmail(body);
    console.log('Email sent successfully', result);

    return NextResponse.json({ message: '메일이 성공적으로 전송되었습니다.' }, { status: 200 });
  } catch (error) {
    console.error('Error in contact API route:', error);
    return NextResponse.json(
      { message: '메일 전송 중 오류가 발생했습니다.', error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}