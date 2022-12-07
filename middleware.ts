import { NextResponse } from "next/server";

export async function middleware(req: any, ev: any) {
    //console.log('fdf');
    
    return NextResponse.next()
}