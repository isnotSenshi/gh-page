import { isObject } from 'lodash'
import get from 'lodash/get'
import isArray from 'lodash/isArray'
import isString from 'lodash/isString'
import client from './graphql'

const mainError = (dispatch: any, error: any, onError?: any) => {
	let description = error
	if (!isString(description)) {
		if (isObject(error)) description = get(error, 'message', 'No disponible')
		if (isArray(error)) description = get(error, '0.message', 'No disponible')
	}
	if (onError)
	{
		console.log('Error')
		return onError(error)
	}
}

const mainFinally = (dispatch: any, notSpinner?: boolean, onFinally?: any) => {
	if (onFinally) onFinally()
}

class Methods {
	constructor() {
		this.mutate = this.mutate.bind(this)
		this.query = this.query.bind(this)
	}

	async mutate(
		dispatch: any,
		execute: any,
		succeeded: any,
		onError?: any,
		notSpinner?: boolean,
		navigateTo?: any,
		onFinally?: any
	) {
		client
			.mutate(execute)
			.then(({ data }) => {
				succeeded(data)
				navigateTo && navigateTo()
			})
			.catch(({ error }) => {
				mainError(dispatch, error, onError)
			})
			.finally(() => {
				mainFinally(dispatch, notSpinner, onFinally)
			})
	}

	async query(
		dispatch: any,
		execute: any,
		succeeded: any,
		_onError?: any,
		notSpinner?: boolean,
		navigateTo?: any,
		onFinally?: any
	) {
		client
			.query(execute)
			.then(({ data }) => {
				succeeded(data)
				navigateTo && navigateTo()
			})
			.catch(({ error }) => {
				mainError(dispatch, error)
			})
			.finally(() => {
				mainFinally(dispatch, notSpinner, onFinally)
			})
	}
}

export default new Methods()
