import { Schema, model, models } from "mongoose";

 const taskSchema = new Schema ({
    title:{
        type:String,
        requried: [true, 'El titulo es requerido'],
        unique: true,
        trim: true

    },
    description:{
        type: String,
        required: [true, 'Description is required'],
        
    }
},
{
    timestamps: true
})



export default models.Task || model('Task', taskSchema)