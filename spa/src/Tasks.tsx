import { useState } from "react";
import CreateTask from "./CreateTask";
import ShowTasks from "./ShowTasks";

function Tasks () {
    const [reload, setReload] = useState<boolean>(false);

    return (
        <div>
            <CreateTask setReload={setReload} />
            <ShowTasks reload={reload} setReload={setReload} />
        </div>
    )
}

export default Tasks;