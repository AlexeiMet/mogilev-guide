import styled from 'styled-components'

export const SightTabsContainer = styled.div``

export const SightTabsHeader = styled.div`
    display: flex;
    margin-top: 31px;
    margin-bottom: 24px;
    background-color: rgba(46,46,46,0.05);
    border-radius: 99999px;
`

export const SightTabsHeaderButton = styled.div<{ active: boolean }>`
    flex-grow: 1;
    padding: 7px;
    font-family: Arial;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: rgba(46,46,46,0.5);
    border-radius: 99999px;
    cursor: pointer;
    ${({ active }) => active ? `
        background-color: #09DDDF;
        color: #fff;
    ` : null}
`

export const SightTabsBody = styled.div``
