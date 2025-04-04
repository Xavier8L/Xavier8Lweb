import React from 'react';
import TodoItem from '../todos';
import styles from '../css/TodoList.module.css';


interface Props{
    list:TodoItem[];
    onDelete: (id: number) => void;
    onEdit: (id: number, text: string) => void;
    onToggle:(id:number)=>void;
}

interface State {
    editingId: number | null;
}

class todoList extends React.Component<Props, State>{
    state: State = {
        editingId: null
    }
    
    onDelete = (id:number)=>{
        this.props.onDelete(id);
    }

    editTodo = (id:number, text:string)=>{
        this.props.onEdit(id, text);
        this.setState({ editingId: null });
    }
    
    onToggle = (id:number)=>{
        this.props.onToggle(id);
    }


    render(){
        return(
            <ul className={styles.todoList}>
               {this.props.list?.map(todo =>{
                return(
                    <li key={todo.id} className={styles.todoListLi}>
                    <div className={styles.todoListDiv}>
                        <input className={styles.toggle} type='checkbox' checked={todo.done} onChange={() => this.onToggle(todo.id)} />
                        {this.state.editingId === todo.id ? (
                            <div>
                            <input 
                                className={styles.edit} 
                                defaultValue={todo.name}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && e.currentTarget.value !== '' && e.currentTarget.value !== todo.name) {
                                        this.editTodo(todo.id, e.currentTarget.value);
                                    }
                                }}
                            />
                            <button className={styles.backBtn} onClick={() => this.setState({ editingId: null })}>Back</button>
                            </div>
                        ) : (
                            <>
                                <div className={styles.label}><label className={todo.done ? styles.completed : ''}>{todo.name}</label></div>
                                <button className={styles.destroy} onClick={() => this.onDelete(todo.id)}>X</button>
                                <button className={styles.editBtn} onClick={() => this.setState({ editingId: todo.id })}>Edit</button>
                            </>
                        )}
                    </div>
                </li>
                )
               })}
            </ul>
        )
    }
}

export default todoList;
