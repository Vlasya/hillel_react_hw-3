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
        this.checkInput=this.checkInput.bind(this)
    }

    componentDidMount() {
        //Current input after render
        this.inputRef1.current.focus()
    }

checkInput(event){
    // Разрешаем: backspace, delete, tab и escape
     if ( event.keyCode === 46 || event.keyCode === 8 || event.keyCode === 9 || event.keyCode === 27 ||
    //     // Разрешаем: Ctrl+A
         (event.keyCode === 65 && event.ctrlKey === true) ||
    //     // Разрешаем: home, end, влево, вправо
        (event.keyCode >= 35 && event.keyCode <= 39)) {
    //
    //     // Ничего не делаем
         return;
     } else {
        // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
        if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
            event.preventDefault();
        }


}}


    changeValue(name) {

        return event => {
            // Validation - Enter just number
            this.checkInput(event)

            // Если количество символов больше 4,то переносим фокус на след. инпут
            if (event.target.value.length >=4 ) {
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
                    default:

                }
            }

            if (event.target.value.length ===0 && event.code==='Backspace') {
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
                    default:
                }
            }
        }
    }

    render() {

        return (
            <div className={s.wrapper}>
                <div className={s.card}>
                    <input ref={this.inputRef1}
                           name='inputRef1'
                           onKeyDown={this.changeValue('inputRef1')}
                           type="text"
                           maxLength={4}

                    />

                    <input ref={this.inputRef2}
                           name='inputRef2'
                           onKeyDown={this.changeValue('inputRef2')}
                           type="text"
                           maxLength={4}
                    />

                    <input ref={this.inputRef3}
                           name='inputRef3'
                           onKeyDown={this.changeValue('inputRef3')}
                           type="text"
                           maxLength={4}

                    />

                    <input ref={this.inputRef4}
                           name='inputRef4'
                           onKeyDown={this.changeValue('inputRef4')}
                           type="text"
                           maxLength={4}
                    />
                </div>
            </div>
        );
    }




}
