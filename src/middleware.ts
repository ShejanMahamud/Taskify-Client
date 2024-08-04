import { jwtDecode } from "jwt-decode"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

interface DecodedToken {
    role: string;
  }

export const middleware = async (request:NextRequest) => {
    const token: any = cookies().get('next-auth.session-token')
    if(!token) return NextResponse.redirect(new URL('/api/auth/signin',request.url))
    try{
        const { role } = jwtDecode<DecodedToken>(token);
        if(role === 'admin') return NextResponse.redirect(new URL('/dashboard/admin',request.url))
        if(role === 'lead') return NextResponse.redirect(new URL('/dashboard/lead',request.url))
        if(role === 'player') return NextResponse.redirect(new URL('/dashboard/player',request.url))
    }
    catch(error){
        return NextResponse.redirect(new URL('/api/auth/signin',request.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard/admin','/dashboard/lead','/dashboard/player']
}