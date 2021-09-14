import styled from 'styled-components'

export const MenuItemStyled = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  color: #8F8F8F;
  &:hover {
    cursor: pointer;
    color: #FF3737;
  }
`

export const MenuItemActiveStyled = styled.span`
  padding-bottom: 4px;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  color: #FF3737;
  border-bottom: 2px solid #FF3737;
`