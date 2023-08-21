"use client"
import React, { useState } from 'react'
import loginSvg from "../assets/login.svg";
import Image from "next/image";
import { addTask } from '../services/taskService';
import { toast } from "react-toastify";
export const metadata = {
    title: 'Create Task'
}

const addTak = () => {
    const [task, setTask] = useState({
        title: "",
        content: "",
        status: "none",
        userId: "64a506ab413f1d5bcafcdbec"
    });
    const handleAddTask = async (event) => {
        event.preventDefault();


        // validate task data
        try {
            const result = await addTask(task);
            console.log(result);
            toast.success("Your task is added !!", {
                position: "top-center",
            });

            setTask({
                title: "",
                content: "",
                status: "none",
                userId: "64a506ab413f1d5bcafcdbec"
            });
        } catch (error) {
            console.log(error);
            toast.error("Task not added !!", {
                position: "top-center",
            });
        }
    };
    return (
        <div className="grid grid-cols-12 justify-center">
            <div className="col-span-4 col-start-5 p-5 shadow-sm">
                <div className="my-8 flex justify-center">
                    <Image
                        src={loginSvg}
                        style={{
                            width: "50%",
                        }}
                        alt="Login banner"
                    />
                </div>
                <h1 className="text-3xl text-center">
                    Add your task here!!
                </h1>

                <form action="#!" onSubmit={handleAddTask}>
                    <div className="mt-4">
                        <label htmlFor="task_title" className='block text-sm font-medium mb-2'>Title</label>
                        <input
                            type="text"
                            className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 text-white border border-gray-800"
                            id="task_title"
                            name="task_title"
                            onChange={(event) => {
                                setTask({
                                    ...task,
                                    title: event.target.value,
                                });
                            }}
                            value={task.title}
                        />
                        <label htmlFor="task_content" className='block text-sm font-medium mb-2'>Content</label>
                        <textarea
                            className="w-full p-3 rounded-3xl text-white bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
                            id="task_content"
                            rows={5}
                            name="task_content"
                            onChange={(event) => {
                                setTask({
                                    ...task,
                                    content: event.target.value,
                                });
                            }}
                            value={task.content}
                        />
                        {/* task status */}
                        <label htmlFor="task_status" className='block text-sm font-medium mb-2'>Status</label>
                        <select name="" id="task_status"
                            className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 text-white border border-gray-800"
                            onChange={(event) => {
                                setTask({
                                    ...task,
                                    status: event.target.value,
                                });
                            }}
                            value={task.status}
                        >
                            <option value="none" disabled>
                                --Select status--
                            </option>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                    <div className="flex justify-center mt-3">
                        <button className='bg-blue-600 px-3 py-2 rounded-lg hover:bg-blue-800'>Add Todo</button>
                        <button className='bg-red-600 ms-2 px-3 py-2 rounded-lg hover:bg-red-800'>Clear</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default addTak