// 初始化 & 登入
function oplogin() {
    FB.init({ appId: '635285726564421', status: true, cookie: true, xfbml: true }); //appid請去FB申請應用程式
    fblogin();
}
function fblogin() {
    FB.login(function (response) {
             if (response.authResponse) {
             //登入成功
             FB.api('/me', function (response) {
                    //取得 json格式
                    var html = '<table>';
                    debugger;
                    for (var key in response) {
                    html += ('<tr>' + '<th>' + key + '</th>' + '<td>' + response[key] + '</td>' + '</tr>');
                    }
                    document.getElementById('me').innerHTML = html + '</table>';
                    });
                    btn2.style.display="none";
                    btn3.style.display="block";
             }
             else {
             //登入失敗
             alert("登入失敗。");
             }
             });
}
//登出
function fblogout() {
    FB.getLoginStatus(function (response) {
                      if (response.status === 'connected') {
                      FB.logout(function (response) {
                                // user is now logged out
                                document.getElementById('loginform').submit();
                                btn2.style.display="block";
                                btn3.style.display="none";
                                });
                      
                      } else if (response.status === 'not_authorized') {
                      // the user is logged in to Facebook,
                      // but has not authenticated your app
                      FB.logout(function (response) {
                                // user is now logged out
                                alert("請重新登入！");
                                });
                      } else {
                      // the user isn't logged in to Facebook.
                      alert("請重新登入！");
                      }
                      });
}
