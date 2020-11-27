import RequestString from "../RequestString/RequestString";
import Data from "../Data/Data";
import { useSelector } from "react-redux";
import Error from "../Error/Error";
import { Preloader } from "../Preloader/Preloader";
import { StyledApp, MainTitle } from "./Style";

function App() {
  const requestResultCode = useSelector((state) => state.requestResultCode);
  const requestMessage = useSelector((state) => state.requestMessage);
  const isLoading = useSelector((state) => state.isLoading);
  return (
    <StyledApp>
      <MainTitle>Информация о сайте</MainTitle>
      <RequestString />
      {requestResultCode === 200 && <Data />}
      {requestResultCode !== 200 && Number.isInteger(requestResultCode) && (
        <Error message={requestMessage} code={requestResultCode} />
      )}
      {isLoading && <Preloader />}
    </StyledApp>
  );
}

export default App;
