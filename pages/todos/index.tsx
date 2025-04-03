import Layout from "../../components/layout";
import React, { Component } from 'react';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';
import TodoItem from './todos';
import styles from './Todos.module.css';

type Todos = {
  todos: TodoItem[];
}

const todos:TodoItem[] = [
  {id:1,name:'吃饭', done:true},
  {id:2,name:'睡觉', done:false},
  {id:3,name:'做作业', done:false},
]

class TodosHome extends Component<{},Todos> { 
    state:Todos ={
      todos
    } 
    
    addTodo = (text:string)=>{                                
      this.setState({
        todos:[...this.state.todos,{id:this.state.todos.length+1,name:text,done:false}]
      })
    }
  
    deleteTodo = (id: number) => {
      this.setState({
        todos: this.state.todos.filter(todo => todo.id !== id)
      });
    }
  
    editTodo = (id: number, text: string) => {
      this.setState({
        todos: this.state.todos.map(todo => todo.id === id ? {...todo, name: text} : todo)
      });
    }
  
    onToggle = (id:number)=>{
      this.setState({
        todos: this.state.todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo)
      });
    }
  
    onToggleAll = ()=>{
      this.setState({
        todos: this.state.todos.map(todo => ({...todo, done: !this.state.todos.every(todo => todo.done)}))
      });
    }
    
   
    render() {
      return ( 
        <div className={styles.body}>
          <div className={styles.App}>
            <section className={styles.todoapp}>
                <TodoAdd onAddTodo={this.addTodo} />
                <section className={styles.main}>
                <div className={styles.toggleAllContainer}>
                    <input className={styles.toggleAll} type='checkbox' checked={this.state.todos.every(todo => todo.done)} onChange={() => this.onToggleAll()} />
                    <label htmlFor='toggle-all' className={styles.toggleAllLabel}>Mark all as complete</label>
                </div>
                <TodoList list={this.state.todos} onDelete={this.deleteTodo} onEdit={this.editTodo} onToggle={this.onToggle} />
                </section>
                
                <TodoFooter />
            </section>
          </div>
        </div>
      );
    }
  }


export default TodosHome;