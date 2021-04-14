import styled from 'styled-components'

const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 50px){
        flex-direction: column;
        justify-content: center;
    }
`

export default Row