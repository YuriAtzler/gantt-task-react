import { Task } from "../../dist/types/public-types";

export function initTasks() {
  const currentDate = new Date();
  const tasks: Task[] = [
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        2
      ),
      name: "teste",
      id: "task1",
      progress: 25,
      type: "task",
      hideChildren: false,
      displayOrder: 1,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
       4
      ),
      name: "teste",
      id: "task2",
      progress: 0,
      type: "task",
      hideChildren: false,
      displayOrder: 1,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 3),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        4
      ),
      name: "teste",
      id: "task3",
      progress: 35,
      type: "task",
      hideChildren: false,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
       7
      ),
      name: "teste",
      id: "task4",
      progress: 10,
      type: "task",
      hideChildren: false,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 5),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        6
      ),
      name: "teste",
      id: "task5",
      progress: 75,
      type: "task",
      hideChildren: false,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 6),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
       9
      ),
      name: "teste",
      id: "task6",
      progress: 50,
      type: "task",
      hideChildren: false,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 7),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
       8
      ),
      name: "teste",
      id: "task7",
      progress: 45,
      type: "task",
      hideChildren: false,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
      10
      ),
      name: "teste",
      id: "task9",
      progress: 80,
      type: "task",
      hideChildren: false,
    },
  ];
  return tasks;
}

export function getStartEndDateForProject(tasks: Task[], projectId: string) {
  const projectTasks = tasks.filter(t => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
}
