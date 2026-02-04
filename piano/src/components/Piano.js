// render de 12 keys
// input del tracking
// que suenen las notas

import React from 'react';
import { Key } from './Key.js';
import './Piano.css';
import _ from 'lodash';
import { NOTES, VALID_KEYS, KEY_TO_NOTE } from '../global/constantes.js';


class Piano extends React.Component {

    //Detecta cada vez que pulsamos una tecla.

    componentDidMount = () => {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }

    // Evita las repiticiones automáticas.
    // Verifica que la tecla sea válida.
    // Le añade a la tecla el estado pressedKeys y llama a playNote.

    handleKeyDown = (event) => {

        if (event.repeat) {
            return;
        }

        const key = event.key;

        const updatedPressedKeys = [...this.state.pressedKeys];

        if (!updatedPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
            updatedPressedKeys.push(key);
        }
        this.setState({
            pressedKeys: updatedPressedKeys,
        });
        this.playNote(KEY_TO_NOTE[key]);
    }

    // Buscas la tecla que has soltado y la eliminas del array para que deje de verse presionada.

    handleKeyUp = (event) => {

        const index = this.state.pressedKeys.indexOf(event.key);

        if (index > -1) {
            this.setState(state => ({
                pressedKeys: state.pressedKeys.splice(index, 1)
            }));
        } 
    }

    // Busca la etiqueta por su ID y le da al play.


    playNote = (note) => {
        if (!_.isEmpty(note)) {

            const noteAudio = new Audio(document.getElementById(note).src);
            noteAudio.play();
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            pressedKeys: [],
        };
    }

    // El _. es de lodash, se usa para recorrer NOTES y para poder crear diferentes "Key".

    render() {
        const keys = _.map(NOTES, (note, index) =>{
            return (
            <Key 
            key={index}
            note={note}
            pressedKeys={this.state.pressedKeys}
            />
        );
    });
    
        const audioFiles = _.map(NOTES, (note, index) => {
            return (
                <audio 
                id={note}
                key={index}
                src={`../../notas/${note}.mp3`}
                />
            )
        })

    return (
        <div>
            <div className="piano">
                {keys}
            </div>
            <div>
                {audioFiles}
            </div>
        </div>
    )
}

}

export { Piano };