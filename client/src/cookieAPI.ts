const getCookie = (name: string) => {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +                                              // eslint-disable-next-line
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

const setCookie = (cname: string,val: string) => {
  var d: Date = new Date();
  d.setTime(d.getTime() + (365*24*60*60*1000));
  var expires: string = "expires="+d.toUTCString();
  document.cookie = cname + "=" + val + "; " + expires + "; path=/";
}

export { getCookie, setCookie };
