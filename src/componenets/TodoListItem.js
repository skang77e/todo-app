import React from 'react'
import {MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline} from 'react-icons/md';
import styled from 'styled-components';
import cn from 'classnames';

const TodoListItem = ({todo, onRemove, onToggle}) => {
    const {id, text, checked} = todo;
    return (
        <ListItem>
            <div onClick={() => onToggle(id)} className={cn('checkbox', {checked})}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/> }
                <div className="text">{text}</div>
            </div>
            <div onClick={() => onRemove(id)} className="remove">
                <MdRemoveCircleOutline/>
            </div>
        </ListItem>
    )
}

const ListItem = styled.div`
    padding:1rem;
    display:flex;
    align-items:center;
    &:nth-child(even){
        background:#f8f9fa;
    }
    .checkbox{
        cursor:pointer;
        flex:1;
        display:flex;
        align-items:center;
        svg{
            font-size:1.5rem;
        }
        .text{
            margin-left: 0.5rem;
            flex:1;
        }
        &.checked{
            svg{
                color:#22b8cf;
            }
            .text{
                color:#adb5bd;
                text-decoration: line-through;
            }
        }
    }
    .remove{
        display:flex;
        align-items: center;
        font-size:1.5rem;
        color:#ff6b6b;
        cursor:pointer;
        &:hover{
            color:#ff8787;
        }
    }
    &+&{
        border-top: 1px solid #dee2e6;
    }
`
export default React.memo(TodoListItem)
