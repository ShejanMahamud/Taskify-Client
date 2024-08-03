import connectDB from "@/lib/connectDB";
import bcrypt from 'bcrypt'

interface UserProps {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
}

export const POST = async (request:any) => {
    console.log(request)
    try{
        const user = await request.json();
        const hashedPass = bcrypt.hashSync(user.password, 20);
        const db = await connectDB();
        const usersCollection = db.collection('users');
        const isExist = await usersCollection.findOne({email: user.email})
        if (isExist) return Response.json({
            success: false,
            message: 'User Already Exist',
            status: 304
        })
        const res = await usersCollection.insertOne({...user,password: hashedPass})
        Response.json({
            success: true,
            message: 'User Created Successfully!',
            status: 200
        })
    }
    catch(error:any){
      return Response.json({
            success: false,
            error: error.message,
            status: 500
        })
    }
}