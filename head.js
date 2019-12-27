$(function(){
     //鼠标划入选择语言事件
     $('.language').on('mouseenter', function () {
        $('.drowndrop').show();
    })

    $('.language').on('mouseleave', function () {
        $('.drowndrop').hide();
    })

    //点击注册
    $('.login').on('click', function () {
        open("http://10.36.135.89/ctrip/login.html")
    })
    // 点击登陆
    $('.freeRegister').on('click', function () {
        open("http://10.36.135.89/ctrip/register.html")
        
    })

    //鼠标进入我的携程
    $('.myXieCheng').on('mouseenter', function () {
        $('.myXieChengDetail').show();
    })

    //鼠标离开我的携程
    $('.myXieCheng').on('mouseleave', function () {
        $('.myXieChengDetail').hide();
    })

    //鼠标进入我的订单
    $('.myOrder').on('mouseenter', function () {
        $('.myOrderDetail').show();
    })

    //鼠标离开我的订单
    $('.myOrder').on('mouseleave', function () {
        $('.myOrderDetail').hide();
    })

    //鼠标移入联系电话
    $('.telNum').on('mouseenter', function () {
        $('.telNum').css({
            border: '1px solid #ccc',
            height: '80px',
            overflow: 'visible'
        })
    })

    //鼠标移出联系电话
    $('.telNum').on('mouseleave', function () {
        $('.telNum').css({
            padding: '4px',
            marginLeft: '300px',
            textAlign: 'right',
            display: 'inline-block',
            width: '240px',
            height: '38px',
            background: 'white',
            overflow: 'hidden',
        })
    })
})