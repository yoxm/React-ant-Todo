// /* eslint-disable */
import React from 'react';
import { Checkbox, Button } from 'antd';

class TodoItem extends React.Component {
  // 处理任务是否完成状态
  handlerChange() {
    const isDone = !this.props.isDone;
    this.props.changeTodoState(this.props.index, isDone);
    this.handlerMouseOut = this.handlerMouseOut.bind(this);
    this.handlerMouseOut = this.handlerMouseOut.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerDelete = this.handlerChange.bind(this);
  }

  // 鼠标移入
  handlerMouseOver() {
    this.deleteBtn.style.display = 'inline';
  }

  // 鼠标移出
  handlerMouseOut() {
    this.deleteBtn.getDOMNode().style.display = 'none';
  }

  // 删除当前任务
  handlerDelete() {
    this.props.deleteTodo(this.props.index);
  }

  render() {
    const doneStyle = this.props.isDone ? { textDecoration: 'line-through' } : { textDecoration: 'none' };

    return (
      <li
        onMouseOver={this.handlerMouseOver}
        onMouseOut={this.handlerMouseOut}
      >
        <Checkbox checked={this.props.isDone} onChange={this.handlerChange} />
        <span style={doneStyle}>{this.props.text}</span>
        <Button
          style={{ display: 'none' }}
          ref={(button) => { this.deleteBtn = button; }}
          size="small"
          onClick={this.handlerDelete.bind(this)}
        >
          删除
        </Button>
      </li>
    );
  }
}

export default TodoItem;

