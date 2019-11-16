目录结构:
  ├── mock                     # 本地模拟数据
  ├── public
  │   └── favicon.ico          # Favicon
  ├── src
  │   ├── app
  │   │    ├── assets               # 本地静态资源
  │   │    ├── components           # 通用组件
  │   │    ├── widgets              # 业务组件
  │   │    ├── stores               # 状态相关对象（dva model）
  │   │    ├── routes               # 业务页面入口和常用模板
  │   │    └── index.js
  │   ├── common               # 应用公用配置，如导航信息
  │   ├── enums                # 枚举
  │   ├── models               # domain object
  │   ├── services             # 后台接口服务
  │   ├── utils                # 工具库
  │   └── index.js             # 应用入口
  ├── tests                    # 测试工具
  ├── README.md
  └── package.json