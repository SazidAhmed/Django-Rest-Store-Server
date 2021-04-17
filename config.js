let baseUrl = ''
if (process.env.NODE_ENV === 'production') {
   baseUrl = 'http://yourdomain.com/api/'
}
else {
   baseUrl = 'http://localhost:8000/api/'
}

export const apiHost = baseUrl