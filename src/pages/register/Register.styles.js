import styled from "styled-components";
import breakpoints from "../../components/common/breakpoints";
import InputValidated from "../../components/common/InputValidated";

export const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    
    @media (min-width: ${breakpoints.desktop}) {
        flex-direction: row;
    }
`

export const NameInput = styled(InputValidated)`
    flex: 1 1 0;
`