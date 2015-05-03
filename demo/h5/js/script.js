var isOK = false;

$(function () {

    //活动规则
    $('.rule').click(function (e) {
        e.preventDefault();
        mask();
        $('.rules').removeClass("hide");
    });
    // 关闭弹层
    $(".mask").click(function(){
        e.preventDefault();
        $('.pop').addClass("hide");
        $(".mask").addClass("hide");
        $("body").removeClass("overflow");
    });


    //产品介绍
    $(".product ul li").click(function(e){
        e.preventDefault();
        $(this).each(function(){
            mask();
            $('.pro').removeClass("hide");
        });

        //免费领取
        $(".btn-get").click(function(e){
            e.preventDefault();
            $('.pro').addClass("hide");
            $('.apply').removeClass("hide");
            // 提交用户信息
            $(".btn-submit").click(function(e){
                e.preventDefault();
                validate();
                if(isOK){
                    $('.apply').addClass("hide");
                    $('.success').removeClass("hide");
                }else{
                    return false;
                }

                // 完成
                $(".btn-done").click(function(e){
                    e.preventDefault();
                    $(".mask").addClass("hide");
                    $('.pop').addClass("hide");
                })
            })
        })
    })

    // 验证表单
    function validate(){
        var text = $(".text");
        // 文本框不为空
        if(text.eq(0).val() != "" && text.eq(1).val() != ""){
            isOK = true;
        }
    }

    //遮罩
    function mask(){
        $(".mask").css("height",$(document).height());
        $(".mask").removeClass("hide");
        $("body").addClass("overflow");
    }
});