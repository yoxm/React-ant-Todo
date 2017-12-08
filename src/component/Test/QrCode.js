import React, {Component} from 'react';

export default class QrCode extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickQr = this.handleClickQr.bind(this);
        this.state = {active: false,};
    }

    componentDidMount() {
        document.body.addEventListener('click', e => {
            if (e.target && e.target.matches('div.code')){
                return ;
            }
            this.setState({active: false,});
        });
    }

    componentWillUnmount() {
        document.body.removeEventListener('click');
    }

    handleClick() {
        this.setState({active: !this.state.active,});
    }

    handleClickQr(e) {
        e.stopPropagation();
    }

    render() {
        return (<div className="qr-wrapper">
            <button className="qr" onClick={this.handleClick}>二维码</button>
            <div className="code" style={{display: this.state.active ? 'block' : 'none'}} onClick={this.handleClickQr}>
                <img
                    src="qr.png" alt="qr"/></div>
        </div>);
    }
}