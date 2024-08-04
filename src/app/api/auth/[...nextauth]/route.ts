import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from "bcrypt"
import GoogleProvider from 'next-auth/providers/google'

interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
    role: string;
  }

interface CredentialsProps {
    email: string;
    password: string
}

const handler = NextAuth({
session: {
strategy: 'jwt',
maxAge: 30 * 24* 60 * 60
},
providers: [
    CredentialsProvider({
        credentials: {
            email: {},
            password: {}
        },
        async authorize (credentials:CredentialsProps) {
            const {email,password} = credentials;
            if(!email || !password){
                return null
            }
            if(email && password){
                const db = await connectDB()
                const currentUser = await db.collection('users').findOne({email});
                if(!currentUser){
                    return null
                }
                const passMatch = bcrypt.compareSync(password,currentUser.password)
                if(!passMatch){
                    return null
                }
                return currentUser
            }
        }
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
    
],
callbacks: {
    async jwt ({token,account,user}) {
        if(account && user){
            token.role = (user as User).role;
        }
        return token
    },
    async session({ session, token }) {
        if (session.user) {
          session.user.role = token.role;
        }
        return session;
      },
},
pages: {
    signIn: '/api/auth/sign'
}
})

export {handler as GET, handler as POST}