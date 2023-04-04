import {Component} from "react";
import Button from "./Button";

class ControlButtons extends Component {
    render() {
        return (
            <div className='flex'>
                <Button buttonLabel='New' buttonType='primary'/>
                <Button buttonLabel='Undo'/>
            </div>
        );
    }
}

export default ControlButtons