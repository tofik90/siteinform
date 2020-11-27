import { useDispatch, useSelector } from "react-redux";
import {
  StyledRequestString,
  InputString,
  MenuButton,
  Menu,
  MenuItem,
} from "./Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import {
  setIsMenuDroped,
  setRequestAddress,
  setRequestType,
  setHostingData,
  setTechData,
  setRequestMessage,
  setRequestResultCode,
} from "../../store/index";
import { loadHostingData, loadTechData } from "../../Actions/requests";

const RequestString = () => {
  const dispatch = useDispatch();
  const requestAddress = useSelector((state) => state.requestAddress);
  const requestType = useSelector((state) => state.requestType);
  const isMenuDroped = useSelector((state) => state.isMenuDroped);

  const requestStringHandler = (address) => {
    dispatch(setRequestAddress(address));
  };

  const requestTypeHandler = (type) => {
    dispatch(setRequestType(type));
  };

  const getRequest = (key) => {
    if (key === "Enter") {
      switch (requestType) {
        case "hosting":
          dispatch(loadHostingData(requestAddress));
          dispatch(setRequestAddress(""));
          dispatch(setRequestType(""));
          dispatch(setTechData({}));
          break;
        case "tech":
          dispatch(loadTechData(requestAddress));
          dispatch(setRequestAddress(""));
          dispatch(setRequestType(""));
          dispatch(setHostingData({}));
          break;
        default:
          dispatch(setRequestMessage("Выберите тип запроса"));
          dispatch(setRequestResultCode(10));
      }
    }
  };

  const handleDropDown = () => {
    dispatch(setIsMenuDroped(!isMenuDroped));
  };

  return (
    <StyledRequestString>
      <MenuButton onClick={() => handleDropDown()}>
        Тип запроса <FontAwesomeIcon icon={faCaretDown} />
      </MenuButton>
      <Menu isMenuDroped={isMenuDroped}>
        <MenuItem
          onClick={() => {
            requestTypeHandler("hosting");
            handleDropDown();
          }}
        >
          Данные хостинга
        </MenuItem>
        <MenuItem
          onClick={() => {
            requestTypeHandler("tech");
            handleDropDown();
          }}
        >
          Технологии
        </MenuItem>
      </Menu>
      <InputString
        placeholder="Введите имя сайта"
        value={requestAddress}
        onChange={(e) => requestStringHandler(e.target.value)}
        onKeyDown={(e) => getRequest(e.key)}
      />
    </StyledRequestString>
  );
};
export default RequestString;
