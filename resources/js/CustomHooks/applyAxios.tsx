import axios from 'axios';

interface Config {
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
  url: string;
  data?: object;
}

const applyAxios = (
  config: Config,
  // eslint-disable-next-line
  handleSuccess?: (response: any) => void,
  // eslint-disable-next-line
  handleError?: (error: any) => void
) => {
  axios({
    method: config.method,
    url: config.url,
    data: config.data,
  })
    .then(function (response) {
      handleSuccess && handleSuccess(response);
    })
    .catch(function (error) {
      handleError && handleError(error);
      if (error.response.status === 401 && error.response.data.not_allowed) {
        document
          .getElementById('guest-alert-box')!
          .setAttribute('style', 'display:flex !important');
      }
      console.log(error);
    });
};

export default applyAxios;
