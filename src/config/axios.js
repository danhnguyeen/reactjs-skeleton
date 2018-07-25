import axios from 'axios';


const instance = axios.create({
  baseURL: 'http://mylifecompanyapp.amagumolabs.io/api/public/api/v1/',
  headers: {
    'Authorization': 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjY0LjJcL2FwaVwvcHVibGljXC9hcGlcL3YxXC9hdXRoXC9sb2dpbiIsImlhdCI6MTUzMTc5OTY0MSwiZXhwIjoxNjg3MzE5NjQxLCJuYmYiOjE1MzE3OTk2NDEsImp0aSI6IlBLSHgyekxlbHRyb2ZaOUkiLCJzdWIiOjEyLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.gk_DXYXhsuDMdTzTSGHbYmpH9dBrXF2jIYvLcGPkFps'
  }
});

// instance.interceptors.response.use(null, (error) => {
//   return Promise.reject(error);
// });
export default instance;
