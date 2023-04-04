import {Component} from "react";

class SquareNumber extends Component {
    render() {
        return (
            <div className={`flex ${this.props.color} m-auto w-[94%] h-[94%] rounded-sm`}>
                <p className={`text-slate-50 mix-blend-exclusion text-4xl font-bold m-auto antialiased font-mono`}>{this.props.value}</p>
            </div>
        );
    }
}

export default SquareNumber