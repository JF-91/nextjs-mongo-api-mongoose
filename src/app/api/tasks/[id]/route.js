import Task from "@/models/Task";
import { connectDB } from "@/utils/mongoose";
import { NextResponse } from "next/server";



//TODO: GET BY ID
export async function GET (request, {params}){

    try {
        connectDB()
        const task  = await Task.findById(params.id)
    
        console.log(params);
        return NextResponse.json({
            msg: `get by id: ${params.id}`,
            task,
        })
    } catch (error) {
        return NextResponse.json(error.message,{status:404})
    }
}



//TODO: DELETE BY ID
export async function DELETE (request, {params}){

    try {
        const task = await Task.findByIdAndDelete(params.id)
        if( ! task){
            return NextResponse.json({
                msg:"Task no found"
            },{status: 400})
        }
        return NextResponse.json(task)
    } catch (error) {
        return NextResponse.json(error.message,{status:404})
    }
}


//TODO: PUT BY ID
export async function PUT (request, {params}){

try {
    const data = await request.json();
    const updatedData = await Task.findByIdAndUpdate(params.id, data, {new:true})
    
    return NextResponse.json({
        msg:`updated task by id ${params.id}`,
        updatedData
    })
} catch (error) {
    return NextResponse.json(error, {status:400})
}
}