import { connectDB } from "@/utils/mongoose";
import Task from "@/models/Task";
import TaskCard from "@/components/TaskCard";


async function loadTask() {
  connectDB();
  const tasks = await Task.find();
  return tasks;
}

export default async function Home() {

 
  const tasks = await loadTask();

  return (
    <div className="grid grid-cols-3 gap-2">
      <h1>Hello World</h1>
      {tasks.map((item) => (
        <TaskCard task={item} key={item._id}/>
      ))}
      
    </div>
  );
}
