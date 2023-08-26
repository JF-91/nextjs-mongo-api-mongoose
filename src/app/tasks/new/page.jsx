"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const FormPage = () => {
  //userouter
  const router = useRouter();

  // state from the form
  const [newTask, setNewTask] = useState({});

  //axios fetch

  const createTask = async () => {
    const res = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify(newTask),
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.push("/");
    console.log(res);

  };

  //form submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask();

    console.log(newTask);

  };

  //input handlechange update the state
  const handleInputchange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <input
          className=" bg-gray-800 border-2 w-full rounded-lg my-4"
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleInputchange}
        />
        <textarea
          className=" bg-gray-800 border-2 w-full rounded-lg my-4"
          rows={3}
          placeholder="description"
          name="description"
          onChange={handleInputchange}
        ></textarea>
        <button className="bg-green-600 hover:bg-green-700 text-white font-sans px-4 py-2 rounded-lg">
          save
        </button>
      </form>

      
    </div>
  );
};

export default FormPage;
