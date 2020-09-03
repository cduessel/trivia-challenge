import { tokenAPI, questionsAPI } from '../services/serviceAPI';

export const LOGIN = 'LOGIN';
export const REQUEST_API_DATA = 'REQUEST_API_DATA';
export const RECEIVE_API_DATA_SUCCESS = 'RECEIVE_API_DATA_SUCCESS';
export const RECEIVE_API_DATA_FAILURE = 'RECEIVE_API_DATA_FAILURE';
export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
export const RECEIVE_QUESTIONS_FROM_API = 'RECEIVE_QUESTIONS_FROM_API';
export const COUNTER = 'COUNTER';
export const DADOS = 'DADOS';
export const ZEROU = 'ZEROU';
export const CLEARLOG = 'CLEARLOG';
export const ZERODADOS = 'ZERODADOS';

export const dados = (player) => ({
  type: DADOS,
  player,
});

export const zeroDados = () => ({
  type: ZERODADOS,
});

export const handleSubmit = (login) => ({
  type: LOGIN,
  login,
});

export const clearLog = () => ({
  type: CLEARLOG,
});

const requestAPIdata = () => ({
  type: REQUEST_API_DATA,
});

const receiveAPIdataSuccess = (data) => ({
  type: RECEIVE_API_DATA_SUCCESS,
  data,
});

const receiveAPIdataFailure = (error) => ({
  type: RECEIVE_API_DATA_FAILURE,
  error,
});

const requestQuestions = () => ({
  type: REQUEST_QUESTIONS,
});

export const receiveQuestionsFromAPI = (data) => ({
  type: RECEIVE_QUESTIONS_FROM_API,
  questions: data.results,
});

export const counter = () => ({
  type: COUNTER,
});

export const zCounter = () => ({
  type: ZEROU,
});

export function fetchToken() {
  return (dispatch) => {
    dispatch(requestAPIdata());

    return tokenAPI().then(
      (data) => dispatch(receiveAPIdataSuccess(data)),
      (error) => dispatch(receiveAPIdataFailure(error)),
    );
  };
}

export function fetchQuestions(data) {
  return (dispatch) => {
    dispatch(requestQuestions());

    return questionsAPI(data).then((token) =>
      dispatch(receiveQuestionsFromAPI(token)),
    );
  };
}
