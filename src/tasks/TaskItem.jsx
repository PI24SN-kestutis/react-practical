//Kiekviena užduotis gauna savo duomenis ir dvi veiksmų funkcijas per props.
function TaskItem({ task, onComplete, onDelete }) {
    return (
        <li className={`task-item ${task.completed ? 'completed' : ''}`}>
            <div className="task-item-content">
                <span className="task-item-text">
                    {task.text}
                </span>

                {task.completed && (
                    <span className="task-status">
                        Atlikta
                    </span>
                )}
            </div>

            <div className="task-actions">
                <button
                    type="button"
                    className="complete-button"
                    onClick={() => onComplete(task.id)}
                    disabled={task.completed}
                >
                    Pažymėti kaip atliktą
                </button>

                <button
                    type="button"
                    className="delete-button"
                    onClick={() => onDelete(task.id)}
                >
                    Ištrinti
                </button>
            </div>
        </li>
    );
}

export default TaskItem;