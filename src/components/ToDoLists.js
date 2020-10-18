
import React from 'react';
import ToDoList from './ToDoList';
import './ToDoLists.css';

function ToDoLists(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th id="dateTh">Date</th>
                    <th id="todo">ToDo</th>
                    <th id="completed">Completed</th>
                    <th id="giveup">Give up</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.lists.map(el => {
                        return <ToDoList key={el[0]} id={el[0]} date={el[1]} text={el[2]} completed={el[3]} />
                    })
                }
            </tbody>
        </table >
    );
}

export default ToDoLists;

