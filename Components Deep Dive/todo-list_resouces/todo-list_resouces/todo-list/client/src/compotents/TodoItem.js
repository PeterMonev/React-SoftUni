
export const TodoItem = (props) => {
    let className = 'todo';
 
    if(props.isCompleted){
        className += ' is-completed'
    }

    return (
        <tr className={className}>
        <td>{props.title}</td>
        <td>{props.isCompleted ? 'Completed' : 'incompleted'}</td>
        <td className="todo-action">
          <button className="btn todo-btn" onClick={() => props.onClick(props)} >Change status</button>
        </td>
      </tr>
    )
}