import React, {useEffect} from 'react'
import {useStore} from './index'

const Button = React.memo((props) =>
	<button {...props} style={{
		display: 'block',
		margin: '16px',
		fontSize: '1em',
	}}>
		{props.children}
	</button>,
)

export default React.memo(() => {
	// Using `state.locale`:
	const {dp, state: {locale}} = useStore()

	const languageCode = locale.split('-')[0]

	const isRtl = /^(?:fa|ar|he)$/.test(languageCode)
	const direction = isRtl ? 'rtl' : 'ltr'

	useEffect(() => {
		if (document.documentElement.lang !== languageCode) document.documentElement.lang = languageCode
		if (document.documentElement.dir !== direction) document.documentElement.dir = direction
	})

	// Using `dp` (our special action-dispatcher):
	return (
		<>
			<Button onClick={() => dp.changeLocale('fa-IR')} style={{display: 'block'}}>
				fa-IR
			</Button>
			<Button onClick={() => dp.changeLocale('en-US')} style={{display: 'block'}}>
				en-US
			</Button>
			<Button onClick={() => dp.switchLocale()} style={{display: 'block'}}>
				{locale === 'en-US' ? 'Switch Locale' : 'تغییر زبان'}
			</Button>
		</>
	)
})
