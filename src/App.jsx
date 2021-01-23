import React from 'react'
import s from './App.module.sass';
import {Card} from "./Components/Card/Card";

export class App extends React.Component {
  render() {
      return(
          <div className={s.wrapper}>
              <div className={s.card}>
                  <Card/>
              </div>

          </div>

      )
  }


}