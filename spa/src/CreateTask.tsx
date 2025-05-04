import axios from "axios";
import { Formik, Field, Form } from "formik";

interface Props {
    setReload: React.Dispatch<React.SetStateAction<boolean>>
}

function CreateTask ({setReload}: Props){
    const handleSubmit = async (json: string) => {
        try {
            const response = await axios.post('/api/tasks', json, {headers: {'Content-Type': 'application/json'}});
            setReload(true);
            console.log(response)
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                }}
                onSubmit={async (values) => {
                    const json = JSON.stringify(values);
                    await handleSubmit(json);
                }}
            >
            <Form>
                <label htmlFor="name">Task</label>
                <Field id="name" name="name" placeholder="New task detail..." />

                <button type="submit">Add</button>
            </Form>
            </Formik>
        </div>       
    )
}

export default CreateTask;