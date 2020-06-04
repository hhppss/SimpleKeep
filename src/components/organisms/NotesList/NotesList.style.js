import styled from 'styled-components'
import Masonry from 'react-masonry-css'

export const NotesContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* flex-wrap: wrap; */
  /* align-items: flex-start; */
  flex-flow: column wrap;
  margin-top: 50px;
  /* justify-content: left; */
  margin-left: 50px;
`

export const Container = styled.div`
  display: flex;
  margin: 0px 10px 10px 10px;
  flex-wrap: wrap;
`

export const Category = styled.p`
  margin-left: 35px;
  color: #5f6368;
  font-family: Roboto, Arial, sans-serif;
  letter-spacing: 0.65px;
`

export const StyledMasonry = styled(Masonry)`
  display: flex;
  width: auto;

.my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
  margin-bottom: 30px;
}
`
