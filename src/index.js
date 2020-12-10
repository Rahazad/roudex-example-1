import {roudexInitializer} from '@rahazad/roudex'
import React from 'react'
import ReactDOM from 'react-dom'
import {payloadCreators} from './actions'
import App from './App'
import {createPathFromState, createPayloadFromUrl, initialState} from './configureStore'

const {useStore, StoreProvider} = roudexInitializer(
	initialState,
	payloadCreators,
	createPayloadFromUrl,
	createPathFromState,
)
export {useStore}  // Export it so descendent components can use it ...

const Root = () =>
	<StoreProvider>
		<App/>
	</StoreProvider>

ReactDOM.render(<Root/>, document.getElementById('root'))
