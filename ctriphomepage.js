//入口函数
$(function () {
    // banner图
    var mySwiper = new Swiper('.swiper-container', {
        // direction: 'ho', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: true,

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })

    $.ajax({
        type: "GET",
        url: "./hottravelcity.json",
        success: function (res) {
            var temp_city = ''
            for (var i = 0; i < res.length; i++) {
                temp_city += `<li class="travelCity">
                <div class="${res[i].img} size">
                    
                    <div>
                        <p class="localPlace">${res[i].city}</p>
                        <p>￥<b>${res[i].price}</b>/人起</p>
                    </div>
                        
                    
                </div>
                <div class="product-detail">
                    <a href="#"></a>
                    <p class="title">${res[i].title}</p>
                    <p class="info">${res[i].info1}</p>
                    <p class="info">${res[i].info2}</p>
                    <p class="link">${res[i].moreDetail}></p>
                </div>
            </li>`
            }

            var temp_travelcity = `<div class="travelPlace">
            <ul>
                <li><a href="#">热门</a></li>
                <li><a href="#">特价旅游</a></li>
                <li><a href="#">出境游</a></li>
                <li><a href="#">境内游</a></li>
                <li><a href="#">周边游</a></li>
                <li><a href="#">邮轮</a></li>
                <li><a href="#">门票</a></li>
                <li><a href="#">当地玩乐</a></li>
                <li><a href="#">主题游</a></li>
                <li><a href="#">高端游</a></li>
            </ul>
            <div class="hotPlace">
                <ul>
                    <li class="active"><a href="#">境内</a></li>
                    <li><a href="#">日本</a></li>
                    <li><a href="#">东南亚</a></li>
                    <li><a href="#">欧洲</a></li>
                    <li><a href="#">美洲</a></li>
                    <li><a href="#">澳中东非</a></li>
                </ul>
                <div class="domesticTravel">
                    <ul>
                        ${temp_city}
                    </ul>
                    <div class="vip">
                        <a href="#"><img src="./images/huiyuan.jpg"></a></li>
                    </div>
                </div>
            </div>
        </div>`
            $('.allInfo> .container').prepend(temp_travelcity)
        }
    })

    $.ajax({
        type: "GET",
        url: "./overseatravelcity.json",
        success: function (res) {
            console.log(res)
            var temp_oversea = '';
            for (var i = 0; i < res.length; i++) {
                // console.log(res)
                temp_oversea += `<li>
                <div class ="${res[i].img} size">
                    <a href ="#" class="detailLink"></a>
                    <div>
                        <p class="localPlace">${res[i].city}</p>
                        <p>￥<b>${res[i].price}</b>/人起</p>
                    </div>
                    
                </div>
            </li>`
            }
            var temp_overseacity = `<div class="overSeaHotel">
            <ul>
                <li><a href="#">海外酒店</a></li>
                <li><a href="#">海外民宿+短租</a></li>
                <li><a href="#">国内酒店</a></li>
                <li><a href="#">酒店+景点</a></li>
                <li><a href="#">客栈民宿</a></li>
                <li><a href="#">团购</a></li>
            </ul>
            <div class="overSea">
                <div class="overSeaHotelInfo">
                    <h4>促销</h4>
                    <p><a href="#">睡遍全世界—新加坡国家馆</a></p>
                    <p><a href="#">睡遍全世界—日本国家馆</a></p>
                    <p><a href="#">睡遍全世界—澳大利亚站</a></p>
                    <p><a href="#">境外酒店新年大促</a></p>
                    <p><a href="#">睡遍全世界—泰国国家馆</a></p>
                    <h4>促销</h4>
                    <p><a href="#">流行与复古结合的热门人气地...</a></p>
                    <p><a href="#">特别的旅行，美味的餐食</a></p>
                    <p><a href="#">孟加拉国吉大港酒店推荐</a></p>
                    <p><a href="#">最受国人欢迎的伦敦酒店</a></p>
                </div>
                <ul>
                    <li><a href="#">热门城市</a></li>
                    <li><a href="#">都市购物</a></li>
                    <li><a href="#">海岛休闲</a></li>
                    <li><a href="#">旅游胜地</a></li>
                </ul>
                <div class="overSeaTravel">
                    <ul>
                        ${temp_oversea}
                    </ul>
                    <div class="vip">
                        <a href="#"><img src="./images/taiguohotel.jpg"></a></li>
                    </div>
                </div>
            </div>
        </div>`
            $('.travelPlace').append(temp_overseacity)
        }
    })

    $.ajax({
        type: "GET",
        url: "./airline.json", 
        success: function (res) {
            // console.log(res)
            var temp_airline = '';
            for (var i = 0; i < res.length; i++) {
                temp_airline += `<div class="airPlaneLineInner">
                <a href="#" class="airPlaneLineInnerLink"></a>
                <p >深圳 － ${res[i].destination}</p>
                <p>${res[i].startTime} - ${res[i].endTime}</p>
                <p>￥<span>${res[i].price}</span>起<button>立抢</button></p>
                
            </div>`
            }

            var temp_airlinecity = `<div class="discountTicket">
            <ul>
                <li><a href="#">国际/港澳台特价机票</a></li>
                <li><a href="#">国内特价机票</a></li>
            </ul>
            <div class="hotLine">
                <ul>
                    <li><a href="#">热门往返</a></li>
                    <li><a href="#">亚洲</a></li>
                    <li><a href="#">欧洲</a></li>
                    <li><a href="#">美洲</a></li>
                    <li><a href="#">非洲</a></li>
                    <li><a href="#">更多国际•港澳台特价机票></a></li>
                </ul>
                <div class="line">
                    <div class="airPlaneLine">
                        ${temp_airline}
                    </div>
                    <div class="vip">
                        <a href="#"><img src="./images/huifeiguohang.jpg"></a></li>
                    </div>
                </div>
            </div>
        </div>`
            $('.travelPlace').append(temp_airlinecity)
        }
    })

    $.ajax({
        type: "GET",
        url: "./list.json",
        success: function (res) {
            // console.log(res)
            var temp_tags = '';
            for (var i = 0; i < res.tags.itemLst.length; i++) {
                if ((i + 1) % 3 == 1) {
                    temp_tags += '<p>'
                }

                if ((i + 1) % 3 == 0 || i == res.tags.itemLst.length - 1) {
                    temp_tags += '<a href="#">' + res.tags.itemLst[i].nme + '</a>'
                    temp_tags += '</p>'
                }
                else {
                    temp_tags += '<a href="#">' + res.tags.itemLst[i].nme + '</a> | '
                }

            }
            temp_tags = temp_tags.substring(0, temp_tags.length)
            // console.log(temp_tags)

            var temp_tabs = '';
            for (var j = 0; j < res.tabs.length; j++) {
                temp_tabs += `<li><a href="#">${res.tabs[j].tabNme}</a></li>`
            }

            var temp_prdLst = '';
            for (var k = 0; k < res.prdLst.length; k++) {
                temp_prdLst += `<div>
                <a href=${res.prdLst[k].lnk}><img src=${res.prdLst[k].img}></a>
                <p>${res.prdLst[k].nme}</p>
                <p><span>${res.prdLst[k].subNme}</span><span class="rentCarPrice">￥${res.prdLst[k].price.amt}</span>起</p>
            </div>`
            }

            var temp = `<div class="overSeaHotel rentCar">
            <ul>
                <li><a href="#">当地玩乐 • 出境</a></li>
                <li><a href="#">当地玩乐 • 境内</a></li>
            </ul>
            <div class="hotCity">
                <div class="hotCityList">
                    <h4>${res.tags.nme}</h4>
                     ${temp_tags}
                </div>
                <ul>
                    ${temp_tabs}
                </ul>
                <div class="carsList">
                    ${temp_prdLst}
                </div>
            </div>
        </div>`
            $('.allInfo>.container').append(temp)
        }
    })


})