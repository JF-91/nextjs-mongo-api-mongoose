import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Task from "@/models/Task";

//TODO: GET
export async function GET(){
    connectDB()

    const task = await Task.find()

    return NextResponse.json({
        msg:"Task resopnse",
        task
    })
}



//TODO: POST
export async function POST(request){

    try {
        const data = await request.json()
        console.log(data);
    
        const newTask = new Task(data)
        const savedTask = await newTask.save();
        console.log(savedTask);
        return NextResponse.json({
            msg:"post",
            newTask
        })
    } catch (error) {
        console.log(error);
        
        return NextResponse.json(error.message,{
            status: 400
        })

    }

}