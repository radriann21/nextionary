import { MainContainer } from "./components/MainContainer";
import { HeaderComponent } from "./components/HeaderComponent";
import { InputComponent } from "./components/InputComponent";
import { DisplayWord } from "./components/DisplayWord";
  
export default function Home() {
  return (
    <MainContainer>
      <HeaderComponent href="/saved" action="Saved Words" />
      <InputComponent />
      <DisplayWord />
    </MainContainer>
  )
}
