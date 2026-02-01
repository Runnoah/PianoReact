// - notas
// - si es blanca o negra
// - isPlayinh (cambiar color)

// this.props.note. coge el prop que se pasa a la "Key" (note)

// noteIsFlat -> Cogemos el propio valor de las notas para ver si es negra o blanca
// keyisPressed -> Cogemos la nota y la comparamos para ver si se ha presionado

import React from 'react';
import _ from 'lodash';
import { NOTE_TO_KEY } from '../global/constantes.js';
import './Key.css';

class Key extends React.Component {

    // Se valida aquí
    noteIsFlat = (note) => {
        return note.length > 1;
    }
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