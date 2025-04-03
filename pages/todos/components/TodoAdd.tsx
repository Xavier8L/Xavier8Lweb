import React from 'react';
import styles from '../css/TodoAdd.module.css';

type Props = {
    onAddTodo: (text:string) => void;
}

type State = {
    text:string;
}

class todoAdd extends React.Component<Props, State>{
    constructor(props:Props){
        super(props);
        this.state = {
            text:''
        }
    }
    
    onChange =(e:React.ChangeEvent<HTMLInputElement>)=>{    
        this.setState({
            text:e.target.value
        })
    }

    onAdd = (e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.code === 'Enter' && this.state.text !== ''){
            console.log(this.state.text);
            this.props.onAddTodo(this.state.text);
            this.setState({
                text:''
            })
        }
    }

    render(){
        return(
            <header className={styles.header}>
                <h1>Todos</h1>
                <input className={styles.newTodo} placeholder='What needs to be done?' 
                value={this.state.text} onChange={this.onChange}
                onKeyDown={this.onAdd} />
            </header>
        )
    }
}

export default todoAdd;
