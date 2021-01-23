import  React from 'react'
import s from './Card.module.sass'

export class Card extends React.Component{
    //refs
    inputRef1 = React.createRef()
    inputRef2 = React.createRef()
    inputRef3 = React.createRef()
    inputRef4 = React.createRef()


    constructor(props) {
        super(props);

        this.changeValue = this.changeValue.bind(this)
    }

    componentDidMount() {
        //Current input after render
        this.inputRef1.current.focus()
    }

    changeValue(name) {

        return event => {
            console.log(event.target.value)
            // Если количество символов больше 4,то переносим фокус на след. инпут
            event.target.value= event.target.value.replace(/[^0-9]/g,"")
            // evt.value = evt.value.replace(/[^0-9]/g,"")
            if (event.target.value.length > 3 ) {
                console.log(name)
                switch (name) {
                    case 'inputRef1':
                        this.inputRef2.current.focus();
                        break;
                    case 'inputRef2':
                        this.inputRef3.current.focus();
                        break;
                    case 'inputRef3':
                        this.inputRef4.current.focus();
                        break;
                    case 'inputRef4':
                        this.inputRef4.current.blur();
                        break;
                }
            }
            if (event.target.value.length < 1 ) {
                // Если количество символов меньше 1,то переносим фокус на пред. инпут
                switch (name) {
                    case 'inputRef2':
                        this.inputRef1.current.focus();
                        break;
                    case 'inputRef3':
                        this.inputRef2.current.focus();
                        break;
                    case 'inputRef4':
                        this.inputRef3.current.focus();
                        break;
                }
            }
        }
    }

    render() {

        return (
            <div className={s.wrapper}>
                <div ref={this.inputBlock} className={s.card}>
                    <input ref={this.inputRef1}
                           name='inputRef1'
                           onChange={this.changeValue('inputRef1')}
                           type="number"
                           />

                    <input ref={this.inputRef2}
                           name='inputRef2'
                           onChange={this.changeValue('inputRef2')}
                           type="number"
                           />

                    <input ref={this.inputRef3}
                           name='inputRef3'
                           onChange={this.changeValue('inputRef3')}
                           type="number"
                           />

                    <input ref={this.inputRef4}
                           name='inputRef4'
                           onChange={this.changeValue('inputRef4')}
                           type="number"
                           />
                </div>
            </div>
        );
    }




}