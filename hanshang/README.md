vue项目

使用第三方库 ant design  样式是使用的less
npm i ant-design-vue -S
<!--安装按需引入插件-->
npm i -D less less-loader
npm i babel-plugin-import -D
<!-- vue-cli 3中的配置 babel-plugin-import -->
<!-- babel.config.js -->
 module.exports = {
  presets: ["@vue/app"],
+  plugins: [
+    [
+      "import",
+      { libraryName: "ant-design-vue", libraryDirectory: "es", style: 'css' }
+    ]
+  ]
};

小功能包含：楼层点亮，返回顶部