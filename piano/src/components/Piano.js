// render de 12 keys
// input del tracking
// que suenen las notas

import React from 'react';
import { Key } from './Key.js';
import './Piano.css';
import _ from 'lodash';
import { NOTES } from '../global/constantes.js';

// Aqui iteramos entre las notas, creando una "Key", una vez tengamos ese array iterado lo imprimimos

class Piano extends React.Component {

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
    
    return (
        <div className="piano">
            {keys}
        </div>
    )
}

}

export { Piano };