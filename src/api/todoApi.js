import axios from "axios";

const api = axios.create({
    baseurl:'https://jsonplaceholder.typicode.com'
})
  class todoApi 
{
      static get = async (baseurl , config = {}) =>
      {
    return   api.get(baseurl,config)
      }
        static post = async (url, body,config = {}) =>
      {
    return   api.post(url,body,config)
      }
         static put= async (url , body,config = {}) =>
      {
    return   api.put(url,body,config)
      }
        static delete = async (url, config={}) =>api.delete(url, config);
}
export default todoApi