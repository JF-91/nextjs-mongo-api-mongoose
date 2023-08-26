import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";

//TODO: GET
export function GET (){
    connectDB()
    return NextResponse.json({
        msg:"hola"
    })
}