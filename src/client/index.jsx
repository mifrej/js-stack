import 'babel-polyfill'
import React from 'react'
import ReactDom from 'react-dom'
import App from './app'
import { APP_CONTAINER_SELECTOR } from '../shared/config'

ReactDom.render(<App />, document.querySelector(APP_CONTAINER_SELECTOR))
