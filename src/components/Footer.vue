<template>
  <div class="footer">
    <ul class="clearfix">
      <li><a href="">首页</a></li>
      <li><a href="">发现</a></li>
      <li><a href="">我的</a></li>
    </ul>
  </div>
</template>
<script>
  export default {

  }
</script>
<style type="less">
  .footer {
    height: 1.8rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 2px solid #ccc;
    background-color: #fff;
  }
  .footer ul li {
    float: left;
    width: 33%;
    height: 1.8rem;
    line-height: 1.8rem;
    font-size: 1.4rem;
    text-align: center;
  }
  .footer ul li a{
    color: #666;
  }

</style>
