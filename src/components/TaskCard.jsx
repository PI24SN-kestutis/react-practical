function TaskCard({ task, onOpen }) {
    const available = task.id === 'a';

    return (
        <article className="task-card">
            <div className="task-icon">
                {task.title.charAt(0)}
            </div>

            <h2>{task.title}</h2>
            <p>{task.description}</p>

            <div className="task-progress">
                <div className="task-progress-fill"></div>
            </div>

            <button
                type="button"
                disabled={!available}
                onClick={onOpen}
            >
                Atidaryti
            </button>
        </article>
    );
}

export default TaskCard;