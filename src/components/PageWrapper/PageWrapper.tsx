import React from 'react'
import TopNav from '../TopNav/TopNav'
import {Wrapper} from './style'

const PageWrapper: React.FC = ({children}) => {
    return (
        <>
            <TopNav />
            <Wrapper>
                {children}
            </Wrapper>
        </>
    )
}

export default PageWrapper