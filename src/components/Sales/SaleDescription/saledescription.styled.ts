import styled from "styled-components";

export const SaleDescriptionStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px;
  
`
export const SaleDescriptionAbout = styled.div`
  padding: 10px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-start;
`

export const SaleDescriptionImage = styled.img`
  border-radius: 12px;
  height: 400px;
  width: 600px;
`

export const SaleDescriptionTitle = styled.h1`
  height: 20px;
`

export const SaleDescriptionDescription = styled.div`
  text-align: justify;
  width: 600px;
  font-size: 14px;
`

export const SaleDescriptionButton = styled.div`
  cursor: pointer;
  margin: 20px 0 0 400px;
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
  height: 500px;
  width: 250px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #F5F5F5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #FF3737;
    border-radius: 12px;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #F5F5F5;
    border-radius: 12px;
  }
`

export const SaleOtherTitle = styled.h1`
  
`

export const SaleOtherCard = styled.div`
  position: relative;
  padding: 20px 10px 0 0;
  height: 200px;
 

  &:after {
    background-color: #FF3737;
    display: none;
    content: '';
    height: 170px;
    width: 3px;
    position: absolute;
    top: 20px;
    right: -10px;
    border-radius: 100px;
  }
  &:hover:after {
    display: block;
  }
`

export const SaleOtherCardTitle = styled.div`
  padding: 6px 0 0 0;
  font-size: 14px;
  
`

export const SaleOtherCardImage = styled.img`
  width: 220px;
  height: 170px;
  border-radius: 12px;
`

