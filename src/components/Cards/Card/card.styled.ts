import styled from "styled-components";

export const CardStyled = styled.div`
  padding: 10px 0 10px 0;
`

export const CardTitleStyled = styled.div`
  cursor: pointer;
  padding: 5px 0 0 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  &:hover{
    color: #FF3737;
  }
`

export const CardDescriptionStyled = styled.div`
  cursor: default;
  padding: 0 0 0 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #202020;
`

export const CardImageStyled = styled.img`
  border-radius: 30px;
`
