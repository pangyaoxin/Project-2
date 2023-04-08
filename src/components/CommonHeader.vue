<template>
    <div class="commonHeader">
        <div class="left">
            <el-button icon="el-icon-menu" size="mini"></el-button>
            <span class="text">首页</span>
        </div>
        <div class="right">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img src="../assets/超人可达鸭.jpg" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script></script>
<style scoped>
.commonHeader {
    height: 60px;
    background-color: #333333;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.left {
    padding-left: 20px;
}
.text{
    color: white;
    padding-left: 20px;
}
.right{
    padding-right: 20px;
}
.el-dropdown-link {
    cursor: pointer;
    color: white;
    margin-left: 20px;
}
.el-icon-arrow-down {
    font-size: 12px;
}
img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
</style>
