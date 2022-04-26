import { React, Component } from 'react';
import styled from 'styled-components/macro';
import { v4 as uuidv4 } from 'uuid';

import Filter from './Filter';
import Input from './Input';
import List from './List';

const Wrapper = styled.div`
    background-color: #fff;
    border-radius: 0.375rem;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.15);
    min-width: 400px;
`
class TodoList extends Component {
    state = {
        mode: 'all',
        items: [
            {
                id: 1,
                label: 'Task 1',
                completed: false
            },
            {
                id: 2,
                label: 'Task 2',
                completed: false
            },
            {
                id: 3,
                label: 'Task 3',
                completed: false
            },
            {
                id: 4,
                label: 'Task 4',
                completed: false
            },
            {
                id: 5,
                label: 'Task 5',
                completed: false
            },
            {
                id: 6,
                label: 'Task 6',
                completed: false
            },
        ]
    }

    handleModeChange = mode => () => {
        this.setState({mode})
    }

    handleComplete = id => () => {
        const newItems = [...this.state.items]
        const filterItems = newItems.filter((item) => item.id === id)[0]
        filterItems.completed = !filterItems.completed
        this.setState({ item: newItems })
    }

    handleDelete = id => () => {
        const filteredItems = this.state.items.filter(item => item.id !== id)
        this.setState({ items: filteredItems})
    }

    handleTaskAdd = (value) => {
        const task = {
            id: uuidv4(),
            label: value,
            completed: false
        }
        const newItems =[task, ...this.state.items]
        this.setState({ items: newItems })
        
        console.log(value)
    }

    render() {
        const { mode, items } = this.state
        let filteredItems = []
        if (mode === 'completed') {
            filteredItems = items.filter(item => item.completed === true)
        } else if (mode === 'active') {
            filteredItems = items.filter(item => item.completed === false)
        } else {
            filteredItems = items
        }

        return (
            <Wrapper>
                <Filter mode={mode} onModeChange={this.handleModeChange}/>
                <Input onTaskAdd={this.handleTaskAdd} />
                <List 
                    items={filteredItems} 
                    onComplete={this.handleComplete}
                    onDelete={this.handleDelete}
                    />
            </Wrapper>
        )
    }
}

export default TodoList