import React from "react";
import {Checkbox , Button} from "antd";
class TodoFooter extends React.Component{

    // 处理全选与全不选的状态
    handlerAllState(event){
        this.props.changeTodoState(null, event.target.checked, true);
    }

    // 绑定点击事件，清除已完成
    handlerClick(){
        this.props.clearDone();
    }

    render(){
        return (
            <div className="clearfix todo-footer">
                <Checkbox  checked={this.props.isAllChecked} onChange={this.handlerAllState.bind(this)}/>
                <span className="fl">{this.props.todoDoneCount}已完成 / {this.props.todoCount}总数</span>
                <Button onClick={this.handlerClick.bind(this)}>清除已完成</Button>
            </div>
        )
    }
}

export default TodoFooter;