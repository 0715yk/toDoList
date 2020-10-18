import React from 'react';
import { store } from '../index';
import './ToDoList.css'
import { completedList, deleteList } from '../actions';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.checkComplete = this.checkComplete.bind(this);
        this.deleteList = this.deleteList.bind(this);
        this.state = {
            button: '포기'
        }
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
    }

    checkComplete() {
        store.dispatch(completedList(this.idValue.value));
    }

    deleteList() {
        store.dispatch(deleteList(this.idValue.value));
    }

    onMouseOver() {
        this.setState({ button: '안돼!' })
    }

    onMouseOut() {
        this.setState({ button: '포기' })
    }

    render() {
        const { id, date, text, completed } = this.props;
        return (
            <tr style={completed ? { backgroundColor: '#87CEEB' } : {}}>
                <td id="date">{date}</td>
                <td id="text">{text.length <= 15 ? text : `${text.substring(0, 16)}...`}</td>
                <td><input id="checkbox" type="checkbox" onChange={this.checkComplete}></input>
                    <input type="hidden" value={id} ref={(input) => { this.idValue = input }} /></td>

                <td><button onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} onClick={this.deleteList}>{this.state.button}</button></td>
            </tr>
        );
    }


}

export default ToDoList;