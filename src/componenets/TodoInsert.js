import React, {useState, useCallback} from 'react'
import { MdAdd } from "react-icons/md";
import styled from 'styled-components';

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    const getInputValue = useCallback(e => {
        setValue(e.target.value);
    }, []);
    const submitTodo = useCallback(
        e => {
            onInsert(value);
            setValue('');

            e.preventDefault();
        },
        [onInsert, value]        
    )
    return (
        <TodoInsertForm onSubmit={submitTodo}>
            <TodoInput value={value} onChange={getInputValue} placeholder="Type your todo"/>
            <Button type="submit">
                <MdAdd/>
            </Button>
        </TodoInsertForm>
    )
}

const TodoInsertForm = styled.form`
    display:flex;
    background: #495057;
`

const TodoInput = styled.input`
    background:none;
    outline:none;
    border:none;
    padding: 0.5rem;
    font-size:1.125rem;
    line-height:1.5;
    color:#fff;
    &::placeholder{
        color:#dee2e6;
    }
    flex:1;
`

const Button = styled.button`
    background:none;
    outline:none;
    border:none;
    background:#868e96;
    color:#fff;
    padding-left:1rem;
    padding-right:1rem;
    font-size:1.5rem;
    display:flex;
    align-items:center;
    cursor:pointer;
    transition: 0.1s background ease-in;
    &:hover{
        background: #adb5bd;
    }
`

export default TodoInsert
