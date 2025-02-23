import { MainContainer } from "./components/MainContainer";
import { HeaderComponent } from "./components/HeaderComponent";
import { InputComponent } from "./components/InputComponent";
  
export default function Home() {
  return (
    <MainContainer>
      <HeaderComponent />
      <InputComponent />
    </MainContainer>
  );
}
