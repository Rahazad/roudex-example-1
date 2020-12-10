/**
 * Created on 1399/9/11 (2020/12/1).
 * @author {@link https://mirismaili.github.io S. Mahdi Mir-Ismaili}
 */

export const payloadCreators = {
	changeLocale: locale => ({
		locale,
	}),
	switchLocale: () => ({
		// if you need the previous state use a callback that gets previous-value and
		// return new-value instead of direct values, like below:
		locale:
			(prevLocale, prevState) =>
				prevLocale === 'en-US' ? 'fa-IR' : 'en-US',
	}),
}
