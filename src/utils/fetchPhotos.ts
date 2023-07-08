const API_PATH = 'https://api.unsplash.com/';

type RequestMethod = 'GET';

function request<T>(
  url = '',
  method: RequestMethod = 'GET',
  data: unknown = null,
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  return fetch(API_PATH + url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
}

export const photo = {
  get: <T>(url: string) => request<T>(url),
};
