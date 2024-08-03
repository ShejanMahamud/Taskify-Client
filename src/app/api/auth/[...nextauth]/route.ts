import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
session: {
strategy: 'jwt'
},
providers: [
    
]
})

export {handler as GET, handler as POST}