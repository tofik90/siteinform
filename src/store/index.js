import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// constants

const SET_IS_MENU_DROPED = "SET_IS_MENU_DROPED";
const SET_REQUEST_ADDRESS = "SET_REQUEST_ADDRESS";
const SET_REQUEST_TYPE = "SET_REQUEST_TYPE";
const SET_IS_LOADING = "SET_IS_LOADING";
const SET_HOSTING_DATA = "SET_HOSTING_DATA";
const SET_TECH_DATA = "SET_TECH_DATA";
const SET_REQUEST_RESULT_CODE = "SET_REQUEST_RESULT_CODE";
const SET_REQUEST_MESSAGE = "SET_REQUEST_MESSAGE";
const SET_SITE_ADDRESS = "SET_SITE_ADDRESS";

// init state

const initState = {
  isMenuDroped: false,
  requestAddress: "",
  requestType: "",
  isLoading: false,
  hostingData: {},
  techData: {},
  requestResultCode: "",
  requestMessage: "",
  siteAddress: "",
};

// reducer
function infoReducer(state = initState, action) {
  switch (action.type) {
    case SET_IS_MENU_DROPED:
      return { ...state, isMenuDroped: action.payload };
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case SET_REQUEST_ADDRESS:
      return { ...state, requestAddress: action.payload };
    case SET_REQUEST_TYPE:
      return { ...state, requestType: action.payload };
    case SET_HOSTING_DATA:
      return { ...state, hostingData: action.payload };
    case SET_TECH_DATA:
      return { ...state, techData: action.payload };
    case SET_REQUEST_RESULT_CODE:
      return { ...state, requestResultCode: action.payload };
    case SET_REQUEST_MESSAGE:
      return { ...state, requestMessage: action.payload };
    case SET_SITE_ADDRESS:
      return { ...state, siteAddress: action.payload };
    default:
      return state;
  }
}

// store

export const store = createStore(
  infoReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// action creators

export const setIsMenuDroped = (bool) => ({
  type: SET_IS_MENU_DROPED,
  payload: bool,
});

export const setIsLoading = (bool) => ({
  type: SET_IS_LOADING,
  payload: bool,
});

export const setRequestAddress = (text) => ({
  type: SET_REQUEST_ADDRESS,
  payload: text,
});

export const setRequestType = (text) => ({
  type: SET_REQUEST_TYPE,
  payload: text,
});

export const setHostingData = (data) => ({
  type: SET_HOSTING_DATA,
  payload: data,
});

export const setTechData = (data) => ({
  type: SET_TECH_DATA,
  payload: data,
});

export const setRequestResultCode = (code) => ({
  type: SET_REQUEST_RESULT_CODE,
  payload: code,
});

export const setRequestMessage = (messageText) => ({
  type: SET_REQUEST_MESSAGE,
  payload: messageText,
});

export const setSiteAddress = (address) => ({
  type: SET_SITE_ADDRESS,
  payload: address,
});
