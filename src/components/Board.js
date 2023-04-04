import {Component} from "react";
import SquareNumber from './SquareNumber'
import ControlButtons from "./ControlButtons";

const DEFAULT_COLOR = 'bg-teal-900'
const DEFAULT_VALUE = ''
const ALL_VALUES = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048]
const BOARD_DEFINITION = [
    {'id': '00', 'color': 'bg-yellow-50', 'value': 2},
    {'id': '01', 'color': 'bg-yellow-100', 'value': 4},
    {'id': '02', 'color': 'bg-yellow-200', 'value': 8},
    {'id': '03', 'color': 'bg-yellow-300', 'value': 16},
    {'id': '10', 'color': 'bg-yellow-400', 'value': 32},
    {'id': '11', 'color': 'bg-yellow-500', 'value': 64},
    {'id': '12', 'color': 'bg-yellow-600', 'value': 128},
    {'id': '13', 'color': 'bg-yellow-700', 'value': 256},
    {'id': '20', 'color': 'bg-yellow-800', 'value': 512},
    {'id': '21', 'color': 'bg-yellow-900', 'value': 1024},
    {'id': '22', 'color': 'bg-yellow-950', 'value': 2048},
    {'id': '23', 'color': DEFAULT_COLOR, 'value': DEFAULT_VALUE},
    {'id': '30', 'color': DEFAULT_COLOR, 'value': DEFAULT_VALUE},
    {'id': '31', 'color': DEFAULT_COLOR, 'value': DEFAULT_VALUE},
    {'id': '32', 'color': DEFAULT_COLOR, 'value': DEFAULT_VALUE},
    {'id': '33', 'color': DEFAULT_COLOR, 'value': DEFAULT_VALUE},
]


class Board extends Component {
    render() {
        return (
            <div>
                <ControlButtons/>
                <div className="flex grid m-auto bg-emerald-950 border-2 border-sky-600 rounded-md w-96 h-96 grid-rows-4 grid-cols-4">
                    {BOARD_DEFINITION.map((square_definition) => (
                        <SquareNumber
                            color={square_definition.color}
                            value={square_definition.value}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Board