import React from 'react'
import ReactDOM from 'react-dom'

window.React = React
window.ReactDOM = ReactDOM

// アプリケーション共通の名前空間を用意する
window.ReactRailsSample = {}
ReactRailsSample.Components = require('./components');
