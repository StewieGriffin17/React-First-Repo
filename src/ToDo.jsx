import './App.css'

export default function ToDo({name, workDone}){
    return (
        <>
            <li>{workDone <= 10 ? 'More priority' : "Less priority"} : {name}</li>
        </>
    )
}