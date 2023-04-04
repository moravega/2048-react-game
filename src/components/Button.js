import {Component} from "react";

class Button extends Component {
    render() {
        let buttonType = () => this.props.buttonType === 'primary'? 'bg-yellow-400 hover:bg-yellow-600' : 'bg-sky-500 hover:bg-sky-700'
        return (
            <button className={`${buttonType()} m-2 text-3xl py-2 font-bold px-4 rounded`}>
                {this.props.buttonLabel}
            </button>
        );
    }
}

export default Button