export type Task ={
    id:number;
    title:string;
    description:string;
    completed:boolean;
}
export const initialTasks:Task[] = [
    {
        id:1,
        title:'Task 1',
        description:'This is task 1',
        completed:false
    },
    {
        id:2,
        title:'Task 2',
        description:'This is task 2',
        completed:false
    },
    {
        id:3,
        title:'Task 3',
        description:'This is task 3',
        completed:false
    }
]