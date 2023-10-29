import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignUp() {
  let target_url =
    "https://asia-southeast2-fahad-402509.cloudfunctions.net/gcfproyekdp";
  let tokenkey = "token";
  let tokenvalue =
    "56d8745202edebd463b054fdcf224fc552606b36f5b89e36b501ccdd890d902075127f0784fe57e03700c6a1ba46bcf304d912e77f87cc559835503e603a4347";
  let datainjson = {
    username: getValue("username"),
    password: getValue("password"),
  };

  postWithToken(target_url, tokenkey, tokenvalue, datainjson, responseData);
}
