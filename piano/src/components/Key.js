// - notas
// - si es blanca o negra
// - isPlaying (cambiar color)

import React from 'react';
import _ from 'lodash';
import { NOTE_TO_KEY } from '../global/constantes.js';
import './Key.css';

class Key extends React.Component {


    // Detecta si una tecla es negra o blanca.
    noteIsFlat = (note) => {
        return note.length > 1;
    }
    
    //Compara la nota actual con la lista de teclas presionadas.
    keyIsPressed = (note, pressedKeys) => {
        return _.includes(pressedKeys, NOTE_TO_KEY[note]);
    }

    render() {

        let keyClassName = "key";

        const noteIsFlat = this.noteIsFlat(this.props.note);
        const keyIsPressed = this.keyIsPressed(this.props.note, this.props.pressedKeys);

        if (noteIsFlat) {
            keyClassName += " flat";
        }
        if (keyIsPressed) {
            keyClassName += " pressed";
        }

        let key;
        if (noteIsFlat) {
            key = (
                <div className={keyClassName}></div>
            );
        } else {
            key = (
                <div className={keyClassName}>
                    <div className="key-text">
                        {this.props.note.toUpperCase()}
                    </div>
                </div>
            );
        }
        return key;

    }

}
export { Key }