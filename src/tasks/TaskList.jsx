//Šis komponentas saugo užduočių masyvą ir valdo visas užduočių operacijas.

import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import './tasks.css';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [nextId, setNextId] = useState(1);

    function handleAdd(text) {
        const newTask = {
            id: nextId,
            text: text,
            completed: false
        };

        setTasks(prevTasks => [...prevTasks, newTask]);
        setNextId(prevId => prevId + 1);
    }

    function handleComplete(id) {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id
                    ? { ...task, completed: true }
                    : task
            )
        );
    }

    function handleDelete(id) {
        setTasks(prevTasks =>
            prevTasks.filter(task => task.id !== id)
        );
    }

    const completedCount = tasks.filter(task => task.completed).length;

    return (
        <main className="tasks-page">
            <h1>A dalis – Užduočių sąrašas</h1>
            
            <p>Pridėkite, pažymėkite ir šalinkite užduotis.</p>

            <section className="tasks-panel">
                <TaskForm onAdd={handleAdd} />
            </section>

            <section className="tasks-panel">
                <div className="tasks-heading">
                    <h2>Mano užduotys</h2>
                    <span>
                        {completedCount} / {tasks.length} atlikta
                    </span>
                </div>

                {tasks.length === 0 ? (
                    <p className="tasks-empty">
                        Užduočių dar nėra.
                    </p>
                ) : (
                    <ul className="tasks-list">
                        {tasks.map(task => (
                            <TaskItem
                                key={task.id}
                                task={task}
                                onComplete={handleComplete}
                                onDelete={handleDelete}
                            />
                        ))}
                    </ul>
                )}
            </section>
        </main>
    );
}

export default TaskList;