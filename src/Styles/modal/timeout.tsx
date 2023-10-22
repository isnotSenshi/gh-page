import styled from 'styled-components'

export interface ModalTimeoutInterface {
	hide?: Function
	logout?: Function
}

export const Timeout = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
`

export const Title1 = styled.div`
    font-family: "Open Sans", sans-serif;
    font-size: 13px;
    color: #222222;
    line-height: normal;
    display:block;
    width:100vh;
    margin-bottom: 10px;
}
`

export const Title2 = styled.div`
    font-family: "Open Sans Semibold", "Open Sans", sans-serif;
    font-size: 13px;
    color: #222222;
    line-height: normal;
    display:block;
    width:100vh;
    font-weight: 600;
    margin-bottom: 30px;
}`

export const Action = styled.button`
	border-radius: 5px;
	padding: 2px 20px;
	font-size: 16px;
	font-weight: 600;
	font-family: 'Open Sans Semibold', 'Open Sans', sans-serif;
	height: 40px;
	border-width: 1px;
	margin-left: 15px;
`
export const Actions = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100vh;
`
