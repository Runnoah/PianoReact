// render de 12 keys
// input del tracking
// que suenen las notas

import React from 'react';
import { Key } from './Key.js';
import './Piano.css';
import _ from 'lodash';
import { NOTES, VALID_KEYS, KEY_TO_NOTE } from '../global/constantes.js';

// Aqui iteramos entre las notas, creando una "Key", una vez tengamos ese array iterado lo imprimimos

class Piano extends React.Component {


    // Esto es una funcion especial, que corre cuando luego de que el componente de Piano es renderizado.
    // Si pones tu dedo en una tecla se triggerea keydown, si lo sueltas se triggeres keyup y cada vez que pase se renderizará.
    componentDidMount = () => {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }

    handleKeyDown = (event) => {
        // Verifica que si se mantienes la secuencia (como zzzzzzz) siga
        if (event.repeat) {
            return;
        }
        // para coger la key
        const key = event.key;
        // esto crea una copia de la lista que ya tenemos hecha
        const updatedPressedKeys = [...this.state.pressedKeys];
        // si no está o si está en valid_keys pasa al array
        if (!updatedPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
            updatedPressedKeys.push(key);
        }
        this.setState({
            pressedKeys: updatedPressedKeys,
        });
        this.playNote(KEY_TO_NOTE[key]);
    }

    handleKeyUp = (event) => {
        //Buscamos el index de la key en la que hemos quitado el dedo.
        // si quitamos el dedo de x (u otra tecla válida) el index cambiaría a 1
        const index = this.state.pressedKeys.indexOf(event.key);
        // esto verifica que si la tecla esta en la lista
        // para luego eliminar la tecla de la lista
        if (index > -1) {
            this.setState(state => ({
                pressedKeys: state.pressedKeys.splice(index, 1)
            }));
        } 
    }

    playNote = (note) => {
        if (!_.isEmpty(note)) {
            // Coge el id de la nota y el source de la misma para poder tocarla luego en audioPlay
            const noteAudio = new Audio(document.getElementById(note).src);
            noteAudio.play();
        }
    }

    // Hacemos un constructor, en el que declaramos "pressedKeys" como un state del piano, si este cambia se puede renderizar/cambiar el componente.
    constructor(props) {
        super(props);
        this.state = {
            pressedKeys: [],
        };
    }
    // Function Render(): Para devolver un jsx
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
                src={`../../ruidos/${note}.mp3`}
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