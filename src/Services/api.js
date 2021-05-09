export const API_VIACEP_URL = 'https://viacep.com.br/ws/';
export const API_APP_MASTERS =
  'https://simple-api-selection.herokuapp.com/submit';

export function GET_CEP(cep) {
  return {
    url: API_VIACEP_URL + `${cep}/json/`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
}

export function POST_USER(body) {
  return {
    url: API_APP_MASTERS,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}
