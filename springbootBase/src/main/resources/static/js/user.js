$(function () {
    // $("#app").html("nihao");
    // var u = $("#modelUser").val();
    // 定义Vue对象，与页面中元素绑定
    var app = new Vue({
        el: '#app',  //绑定DOM根节点（最外层标签）的id
        data: {
            message: "Hello啊！",
            ID: "",
            user: ""
        },
        methods:{
            delUser:function (e) {
                var r=confirm("是否删除该用户！！！");
                if (r==true)
                {
                    var cur = e.currentTarget;  //获取当前元素，即注册点击事件的button
                    var curID = cur.value;      //获取button的value，即user.ID值
                    $.ajax({
                        type:"post",
                        dataType : "json",
                        url : "/user/delUser", //要访问的后台地址
                        data : {
                            ID : curID
                        }, //要发送的数据，采用josn格式

                        success : function(data) { //data为返回的数据
                            if (data.isDel==true){
                                alert("删除成功！！！");
                                window.location.reload();
                            }else
                                alert("删除失败！！！");

                        },

                        error : function(XMLResponse) {
                            alert(XMLResponse.responseText);

                        }
                    });
                }
            },
            findUser:function(e) {
                var cur = e.currentTarget;  //获取当前元素，即注册点击事件的button
                var curID = cur.value;      //获取button的value，即user.ID值
                // ajax请求。
                $.ajax({
                    type:"get",
                    dataType : "json",
                    url : "/user/getUser", //要访问的后台地址
                    data : {
                        ID : curID
                    }, //要发送的数据，采用josn格式

                    success : function(data) { //data为返回的数据

                        app.user=data;
                    },

                    error : function(XMLResponse) {
                        alert("没有");

                    }
                });
            }

        }

    })

    //修改用户信息
    $("#updateUser").click(function () {
        // ajax请求。
        $.ajax({
            type:"post",
            dataType : "json",
            url : "/user/updateUser", //要访问的后台地址
            contentType:"application/json",
            data : JSON.stringify(app.user), //直接传递对象给controller，
                                             // 需将json对象转化成字符流,必须声明dataType和contentType
                                             // 同时controller中注解requestbody

            success : function(reponseData) { //reponseData为返回的数据
                if (reponseData.isUpdate){
                    alert("修改成功");
                    app.user=reponseData.user;
                    window.location.reload();
                }else {
                    alert("修改失败");
                }

            },

            error : function(XMLResponse) {
                alert("失败");

            }
        });
    });



    //由于要给每条用户记录都添加编辑按钮，需注册click事件，而自定义函数不能更新Vue的值，
    //因此将查询方法放到了Vue的methods中。所以此方法不用了。
    //查询用户
    /*$("#butGetUser").click(function () {
        // ajax请求。
        $.ajax({
            type:"get",
            dataType : "json",
            url : "/user/getUser", //要访问的后台地址
            data : {
                ID :app.ID
            }, //要发送的数据，采用josn格式

            success : function(data) { //data为返回的数据
                app.user=data;
            },

            error : function(XMLResponse) {
                alert("没有");

            }
        });
    });*/


});

//自定义函数
//删除用户
/*function delUser(ID) {
    var r=confirm("是否删除该用户！！！");
    if (r==true)
    {
        $.ajax({
            type:"post",
            dataType : "json",
            url : "/user/delUser", //要访问的后台地址
            data : {
                ID : ID
            }, //要发送的数据，采用josn格式

            success : function(data) { //data为返回的数据
                if (data.isDel==true){
                    alert("删除成功！！！");
                }else
                    alert("删除失败！！！");

            },

            error : function(XMLResponse) {
                alert(XMLResponse.responseText);

            }
        });
    }

}*/



