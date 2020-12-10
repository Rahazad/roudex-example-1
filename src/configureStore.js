/**
 * Created on 1399/9/7 (2020/11/27).
 * @author {@link https://mirismaili.github.io S. Mahdi Mir-Ismaili}
 */

export const SUPPORTED_LOCALES = [
	'en-US',
	'fa-IR',
]

const DEFAULT_LOCALE_ID = 'en-US'

export const initialState = {
	locale: DEFAULT_LOCALE_ID,
}

export const createPathFromState = (state) => {
	const tempOrigin = 'http://example.com'
	const url = new URL(tempOrigin)
	url.searchParams.set('l', state.locale)
	return url.href.split(tempOrigin)[1]  // Subtract origin from href
}

export const createPayloadFromUrl = url => {
	const urlObj = new URL(url)
	const locale = urlObj.searchParams.get('l')

	if (SUPPORTED_LOCALES.indexOf(locale) === -1) return {locale: DEFAULT_LOCALE_ID}

	return {locale}
}
