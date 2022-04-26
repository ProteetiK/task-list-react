import { React } from 'react';
import TodoList from './components/TodoList';

import styled from 'styled-components/macro';

const Component = styled.div`
    display: flex;
    background-color: #fafafa;
    min-height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
`

const Wrapper = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Header = styled.h1`
    font-weight: 400px;
    text-transform: uppercase;
    font-size:2.5rem;
`

const App = () => (
    <Component>
        <Wrapper>
            <Header>To-Do List</Header>
        </Wrapper>
        <TodoList />
    </Component>
)

export default App