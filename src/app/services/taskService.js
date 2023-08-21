import { httpAxios } from "@/helper/httpHelper";

export async function addTask(task) {
    console.log(task);
    const result = await httpAxios
        .post("/api/tasks", task)
        .then((response) => response.data);
    return result;
}

export async function getTasksOfUser(userId) {
    console.log(userId);
    const result = httpAxios.
        get(`/api/user/${userId}/tasks`).then((response) => response.data);
    return result;
}


export async function deleteTask(taskId) {
    const result = await httpAxios
        .delete(`/api/tasks/${taskId}`)
        .then((response) => response.data);
    return result;
}