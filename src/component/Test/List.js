import React, {Component} from 'react';

function ListItem({value}) {
    return (
        <li>
            <span>{value}</span>
        </li>
    )
}

function List({list, title}) {
    console.log('fds', list);
    return (
        <div>
            <ul>
                {list.map( (entry, index) => {
                        <ListItem key={`list-${index}`} value={entry.text}/>
                    }
                )}
            </ul>
        </div>
    )
}
export default List;