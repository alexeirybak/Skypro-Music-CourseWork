import { styled } from 'styled-components'

export const FilterBox = styled.div`
  position: absolute;
  width: 248px;
  height: 305px;
  border-radius: 12px;
  padding: 34px;
  background-color: rgb(49, 49, 49);
  top: 50px;
  overflow-y: scroll;
  z-index: 10;
  &::-webkit-scrollbar {
    width: 4px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: #4b4949;
  }
`

export const CenterblockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
`

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const FilterWrapper = styled.div`
  position: relative;
  margin-right: 10px;
`

export const FilterList = styled.ul``

export const FilterItem = styled.li`
  margin: 2px;
  ${(props) =>
    props.selected &&
    `
  color: #ad61ff;

`}
  cursor: pointer;
`

export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  &:not(:last-child) {
    margin-right: 10px;
  }

  ${(props) =>
    props.active &&
    `  border-color: #ad61ff;
  color: #ad61ff;
  cursor: pointer;
`}
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
`
