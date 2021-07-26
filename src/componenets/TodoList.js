import React, {useCallback} from 'react'
import { List } from 'react-virtualized'
import TodoListItem from './TodoListItem'

const TodoList = ({todos, onRemove, onToggle}) => {
    const rowRenderer = useCallback(
        ({index, key, style}) => {
            const todo = todos[index];
            return (
                <TodoListItem todo={todo} key={key} onRemove={onRemove} onToggle={onToggle} style={style}/>
            );
        },
        [onRemove, onToggle, todos],
    )

    return (
        <List
            className="TodoList"
            style={{
                minHeight:"320px",
                maxHeight:"513px",
                overflowY:"auto",
                outline:"none"
            }}
            width={512}
            height={513}
            rowCount={todos.length}
            rowHeight={57}
            rowRenderer={rowRenderer}
            list={todos}
        />
    )
}

export default React.memo(TodoList)
