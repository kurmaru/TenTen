export const token = document && document.cookie.split('; ').find((row) => row.startsWith('token=')).split('=')[1];
