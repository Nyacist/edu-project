//import Post from './Post' //импорт Post.js
//import json from './assets/json-file' //импорт json-file.json
//import logo from './assets/logo.png' //импорт картинок
import './styles/style.css'
import * as $ from 'jquery'
import './styles/scss.scss'

function createAnalytics() {
    let counter = 0
    let destroyed = false

    const listener = () => counter++

    document.addEventListener('click', listener)

    return {
        destroy() {
          document.removeEventListener('click', listener)
            destroyed = true
        },
        getClicks() {
            if (destroyed) {
                return 'Analytics is destroyed'
            }
            return counter
        }
    }
}

window.analytics = createAnalytics()