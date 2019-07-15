<template>
    <div class="XhMorePage pageBody">
        <!-- Header -->
        <Xh-nav-pages-header :title="title"></Xh-nav-pages-header>
        <div class="XhMorePage-main">
             <!--轮播图-->
            <xh-index-swiper :indexSwiper="indexSwipers"></xh-index-swiper>
            <!-- 新书上架 + 热销排行-->
            <xh-index-list :listData="Newbooks"></xh-index-list>
             <!--图书分类-->
            <!-- 畅销经典 + 党员学习 -->
            <div class="book-classify">
                <xh-index-list :listData="Bestseller"></xh-index-list>
            </div>
            <!-- 章程文献 + 党内纪律 -->
            <div class="book-classify">
                <xh-index-list :listData="Constitution"></xh-index-list>
            </div>
            <!-- 党史研究 -->
            <div class="book-classify">
                <xh-index-list :listData="PartyHistory"></xh-index-list>
            </div>

        </div>
    </div>
</template>

<script>
  import XhNavPagesHeader from '../components/index/XhNavPagesHeader';
  import XhIndexSwiper from '../components/index/XhIndexSwiper'
  import XhIndexList from '../components/index/XhIndexList'
    export default {
        name: "XhMorePage",
        components: {
            XhIndexList,
            XhNavPagesHeader,
            XhIndexSwiper
        },
        data () {
            return {
                title:"党政频道",
                Newbooks:[{ tlt:"新书上架",
                    moreLink:"",
                    indexListBrach:[{
                    "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    "tltle":"第五批全国干部学习培训教材（套装共14册）",
                    "price1":"490.00",
                    "price2":""
                    },
                    {
                    "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    "tltle":"第五批全国干部学习培训教材（套装共14册）",
                    "price1":"490.00",
                    "price2":""
                    },
                    {
                    "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    "tltle":"第五批全国干部学习培训教材（套装共14册）",
                    "price1":"490.00",
                    "price2":""
                    },
                    {
                    "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    "tltle":"第五批全国干部学习培训教材（套装共14册）",
                    "price1":"490.00",
                    "price2":""
                    },
                    {
                    "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    "tltle":"第五批全国干部学习培训教材（套装共14册）",
                    "price1":"490.00",
                    "price2":""
                    },
                    {
                    "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    "tltle":"第五批全国干部学习培训教材（套装共14册）",
                    "price1":"490.00",
                    "price2":""
                    }]
                },
                { tlt:"热销排行",
                    moreLink:"",
                    indexListBrach:[{
                    "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    "tltle":"第五批全国干部学习培训教材（套装共14册）",
                    "price1":"490.00",
                    "price2":""
                    },
                    {
                    "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    "tltle":"第五批全国干部学习培训教材（套装共14册）",
                    "price1":"490.00",
                    "price2":""
                    },
                    {
                    "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    "tltle":"第五批全国干部学习培训教材（套装共14册）",
                    "price1":"490.00",
                    "price2":""
                    },
                    {
                    "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    "tltle":"第五批全国干部学习培训教材（套装共14册）",
                    "price1":"490.00",
                    "price2":""
                    },
                    {
                    "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    "tltle":"第五批全国干部学习培训教材（套装共14册）",
                    "price1":"490.00",
                    "price2":""
                    },
                    {
                    "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                    "tltle":"第五批全国干部学习培训教材（套装共14册）",
                    "price1":"490.00",
                    "price2":""
                    }]
                }],
                Bestseller: [
                    { tlt:"畅销经典",
                    moreLink:"",
                    indexListBrach:[
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        },
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        },
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        },
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        },
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        },
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        }
                    ]},
                    {tlt:"党员学习",
                    moreLink:"",
                    indexListBrach:[
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        },
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        },
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        },
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        },
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        },
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        }
                    ]},
                ],
                Constitution: [
                    { tlt:"章程文献",
                    moreLink:"",
                    indexListBrach:[
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        },
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        },
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        },
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        },
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        },
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        }
                    ]},
                    {tlt:"党内纪律",
                    moreLink:"",
                    indexListBrach:[
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        },
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        },
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        },
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        },
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        },
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        }
                    ]},
                ],
                PartyHistory: [
                    {tlt:"党史研究",
                    moreLink:"",
                    indexListBrach:[
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        },
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        },
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        },
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        },
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        },
                        {
                        "src":"https://img1.xinhuashudian.com/images/2019/04/26/27947a7c-542e-4fe4-894d-cb0b32ff34c6.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                        "tltle":"第五批全国干部学习培训教材（套装共14册）",
                        "price1":"490.00",
                        "price2":""
                        }
                    ]}
                ],
                indexSwipers:[
                    {src:"https://img1.xinhuashudian.com/images/2019/06/27/78200476-2e36-48b0-a0d4-9828ca019a57.jpg?x-oss-process=image/resize,m_lfit,limit_0,h_300"},
                    {src:"https://img1.xinhuashudian.com/images/2019/06/27/68dd2db7-2fe7-4866-b51b-6c67ccbfe5f8.jpg?x-oss-process=image/resize,m_lfit,limit_0,h_300"},
                    {src:"https://img1.xinhuashudian.com/images/2019/06/27/78200476-2e36-48b0-a0d4-9828ca019a57.jpg?x-oss-process=image/resize,m_lfit,limit_0,h_300"},
                    {src:"https://img1.xinhuashudian.com/images/2019/06/27/68dd2db7-2fe7-4866-b51b-6c67ccbfe5f8.jpg?x-oss-process=image/resize,m_lfit,limit_0,h_300"}
                ],

        }
    }
}
</script>

<style scoped>

    .XhMorePage-main {
        margin-top: .86rem;
        flex: 1;
        overflow-y: auto;

    }
</style>
