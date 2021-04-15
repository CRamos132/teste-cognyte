import styled from 'styled-components'

const Helper = styled.div`
    position: absolute;
    bottom: 15px;
    left: 15px;
    background-color: gainsboro;
    border: 1px solid gray;
    height: 120px;
    width: 200px;
    color: black;
    font-size: medium;
    padding: 8px;
    z-index: 999;
    .label {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: small;
    }
    .square {
        height: 10px;
        width: 10px;
        margin-right: 8px;
    }
`

export {Helper}