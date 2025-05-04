import axios from "axios";
import { useEffect, useState } from "react";

interface Task {
    id: string,
    name: string
}

interface Props {
    reload: boolean;
    setReload: React.Dispatch<React.SetStateAction<boolean>>;
}

function ShowTasks({reload, setReload}: Props){
    const [tasks, setTasks] = useState<Task[]>([]);
    
    const fetchTasks = async () => {
        try {
            const resp = await axios.get('/api/tasks');
            console.log(resp);
            setTasks(resp.data);
            setReload(false);
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchTasks();
    }, [])

    useEffect(() => {
        if(reload){
            fetchTasks();
        }
    }, [reload])

    return (
        <div>
            <p>Tasks:</p>
            {
                tasks 
                ? <div>
                    <ul>
                        {tasks.map(task => (<li>{task?.name}</li>))}
                    </ul>
                </div>
                : <p>No tasks yet!</p>
            }
        </div>
    )
}   

export default ShowTasks;