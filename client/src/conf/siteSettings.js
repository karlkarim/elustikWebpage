import { apiURL } from './apiConf';
import Axios from 'axios';

export const getSettings = async () => {
  if(isLocalStorage('site-data')) return;
  try {
    const res = await Axios.get(`${apiURL}/sitesettings`);
    localStorage.setItem('site-data', JSON.stringify(res.data));
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}

const isLocalStorage = (storage) => {
  if(localStorage.getItem(storage)) return true;
}
export const settings = {
  siteName: 'Elustik',
}