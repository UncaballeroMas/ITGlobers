import {LoginData} from './types/login';
import {RegisterData} from './types/register';
import {Resource} from './types/resources';
import {User} from './types/user';

type ResponseKind = 'success' | 'failure';

type NetworkResponse<T> = {
  kind: ResponseKind;
  body?: T;
};

export const fetchUser = async (
  page: number,
  count: number,
): Promise<NetworkResponse<User[]>> => {
  const response = await fetch(
    `https://randomuser.me/api/?page=${page}&results=${count}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );

  if (response.ok) {
    const json = await response.json();
    return {
      kind: 'success',
      body: json.results,
    };
  } else {
    return {
      kind: 'failure',
    };
  }
};
export const fetchResource = async (
  page: number,
): Promise<NetworkResponse<Resource[]>> => {
  const response = await fetch(`https://reqres.in/api/unknown?page=${page}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    const json = await response.json();
    return {
      kind: 'success',
      body: json.data,
    };
  } else {
    return {
      kind: 'failure',
    };
  }
};
export const fetchLogin = async (
  email: string,
  password: string,
): Promise<NetworkResponse<LoginData>> => {
  const response = await fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  if (response.ok) {
    const json = await response.json();
    return {
      kind: 'success',
      body: json.token,
    };
  } else {
    return {
      kind: 'failure',
    };
  }
};
export const fetchRegister = async (
  email: string,
  password: string,
): Promise<NetworkResponse<RegisterData>> => {
  const response = await fetch('https://reqres.in/api/register', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  if (response.ok) {
    const json = await response.json();
    return {
      kind: 'success',
      body: json.token,
    };
  } else {
    return {
      kind: 'failure',
    };
  }
};
