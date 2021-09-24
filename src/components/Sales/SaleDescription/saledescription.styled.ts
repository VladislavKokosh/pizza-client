import styled from "styled-components";

export const SaleDescriptionStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  
`
export const SaleDescriptionAbout = styled.div`
  padding: 10px 20px 20px 20px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
`

export const SaleDescriptionImage = styled.img`
  border-radius: 12px;
`

export const SaleDescriptionTitle = styled.h1`
  height: 20px;
`

export const SaleDescriptionDescription = styled.div`
  width: 400px;
  font-size: 14px;
`

export const SaleDescriptionButton = styled.div`
  cursor: pointer;
  margin: 20px 0 0 180px;
  width: 200px;
  height: 50px;
  background: #FF3737;
  font-size: 14px;
  border-radius: 12px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SaleOther = styled.div`
  padding: 0 60px 0 0;
`

export const SaleOtherTitle = styled.h1`
  
`

export const SaleOtherCard = styled.div`
  position: relative;
  padding: 20px 20px 0 0;
  height: 200px;
  &:after {
    background-color: red;
    display: none;
    content: '';
    height: 150px;
    width: 3px;
    position: absolute;
    top: 20px;
    right: -20px;
    border-radius: 100px;
  }
  &:hover:after {
    display: block;
  }
`

export const SaleOtherCardTitle = styled.div`
  padding: 6px 0 0 12px;
  font-size: 14px;
  
`

export const SaleOtherCardImage = styled.img`
  width: 200px;
  height: 150px;
  border-radius: 12px;
`

