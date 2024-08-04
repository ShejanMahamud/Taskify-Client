import { NextResponse } from 'next/server';
import connectDB from "@/lib/connectDB";
import bcrypt from 'bcrypt';

interface UserProps {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  role: string
}

export const POST = async (request: any) => {
  try {
    const user: UserProps = await request.json();

    const hashedPass = bcrypt.hashSync(user.password, 10);

    const db = await connectDB();

    const usersCollection = db.collection('users');

    const isExist = await usersCollection.findOne({ email: user.email });
    if (isExist) {
      return NextResponse.json({
        success: false,
        message: 'User Already Exists',
        status: 304
      });
    }

    const res = await usersCollection.insertOne({ ...user, password: hashedPass });

    return NextResponse.json({
      success: true,
      message: 'User Created Successfully!',
      status: 201 
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
      status: 500
    });
  }
};
