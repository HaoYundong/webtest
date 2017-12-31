/**
 * Created by haoyundong on 2017/7/12.
 */

function getUser() {
    var url = "http://localhost:7000/user/users";

    $.ajax({
        type : "get",
        async:false,
        url : url,
        dataType : "jsonp",
        jsonp: "callback",//服务端用于接收callback调用的function名的参数
        success : function(response){
            adaptToUI(response['data']['users'])
        },
        error:function(){
            alert('fail');
        }
    });
}

function adaptToUI(users) {
    var tbody = document.getElementById("userData");

    tbody.innerHTML = "";

    for(var i = 0; i < users.length; i++) {
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = users[i]['id'];
        td2.innerHTML = users[i]['name'];
        td3.innerHTML = users[i]['mobile'];

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tbody.appendChild(tr);
    }
}