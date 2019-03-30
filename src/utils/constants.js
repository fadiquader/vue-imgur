const CLIENT_ID = '4b46179b1fd6397';
const CLIENT_SECRET = '2fe3e64b005b5716bbc907ef35730464358e8a19';

export const ROOT_URL = `https://api.imgur.com`
export const AUTH_URL = `${ROOT_URL}/oauth2/authorize?client_id=${CLIENT_ID}&response_type=token`

// http://localhost:8080/oauth/callback#
// access_token=f720df3fdde8dbb355306ee02979b8417627f8ec
// &expires_in=315360000
// &token_type=bearer
// &refresh_token=da2c06f3493950a6f6e7912e3ac1d06aca753849
// &account_username=fadiqua
// &account_id=105085881
