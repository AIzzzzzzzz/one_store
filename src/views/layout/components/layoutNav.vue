<script setup>

import { useUserStore } from '@/stores/user';
//import { useRouter } from 'vue-router';

const userStore = useUserStore()
//const router = useRouter()
//用户退出调用函数 
const comfirm = () => {
    //清除当前用户信息
    userStore.clearUserInfo()

    //跳转到登录页
    //router.push('/login')
}
</script>

<template>
    <nav class="app-topnav">
        <div class="container">
            <ul>
                <template v-if="userStore.userInfo.token">
                    <li><a href="http://127.0.0.1:5173/member"><i class="iconfont icon-user"></i>学生:吕惟博</a></li>
                    <li>
                        <el-popconfirm @confirm="comfirm" title="确认退出吗?" confirm-button-text="确认" cancel-button-text="取消">
                            <template #reference>
                                <a href="javascript:;">退出登录</a>
                            </template>
                        </el-popconfirm>
                    </li>
                    <li><a href="http://127.0.0.1:5173/member/order">我的订单</a></li>
                    <li><a href="http://127.0.0.1:5173/member">会员中心</a></li>
                </template>
                <template v-else>
                    <li><a href="javascript:;" @click="$router.push('/login')">请先登录</a></li>
                    <li><a href="javascript:;">帮助中心</a></li>
                    <li><a href="javascript:;">关于我们</a></li>
                </template>
            </ul>
        </div>
    </nav>
</template>


<style scoped lang="scss">
.app-topnav {
    background: #333;

    ul {
        display: flex;
        height: 53px;
        justify-content: flex-end;
        align-items: center;

        li {
            a {
                padding: 0 15px;
                color: #cdcdcd;
                line-height: 1;
                display: inline-block;

                i {
                    font-size: 14px;
                    margin-right: 2px;
                }

                &:hover {
                    color: $xtxColor;
                }
            }

            ~li {
                a {
                    border-left: 2px solid #666;
                }
            }
        }
    }
}
</style>