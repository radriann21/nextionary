import { MainContainer } from "../components/MainContainer"
import { HeaderComponent } from "../components/HeaderComponent" 
import { DisplayWords } from "./DisplayWords"

export default function SavedWordsPage() {
  return (
    <MainContainer>
      <HeaderComponent href="/" action="Search" />
      <DisplayWords />
    </MainContainer>
  )
}
