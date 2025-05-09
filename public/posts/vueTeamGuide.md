# Vue项目团队规范化指南

## 1. 项目模板规范

### 1.1 使用Vue CLI创建项目
```bash
# 使用最新版本的Vue CLI
npm install -g @vue/cli

# 创建项目
vue create my-project
```

### 1.2 推荐的项目结构
```
src/
├── api/                # API 接口管理
├── assets/            # 静态资源
├── components/        # 公共组件
├── composables/       # 组合式函数
├── constants/         # 常量定义
├── directives/        # 自定义指令
├── layouts/           # 布局组件
├── router/            # 路由配置
├── stores/            # 状态管理
├── styles/            # 全局样式
├── types/             # TypeScript 类型定义
├── utils/             # 工具函数
└── views/             # 页面组件
```

## 2. 代码风格规范

### 2.1 ESLint配置
```javascript
// .eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
  },
}
```

### 2.2 Prettier配置
```javascript
// .prettierrc
{
  "semi": false,
  "singleQuote": true,
  "printWidth": 100,
  "trailingComma": "es5",
  "arrowParens": "avoid",
  "endOfLine": "auto"
}
```

### 2.3 命名规范

1. **文件命名**：
   - 组件文件：PascalCase（如`UserProfile.vue`）
   - 工具文件：camelCase（如`formatDate.ts`）
   - 样式文件：kebab-case（如`main-style.scss`）

2. **组件命名**：
   - 基础组件：以Base开头（如`BaseButton.vue`）
   - 业务组件：以业务模块开头（如`UserList.vue`）
   - 页面组件：以Page结尾（如`UserProfilePage.vue`）

3. **变量命名**：
   - 普通变量：camelCase
   - 常量：UPPER_SNAKE_CASE
   - 私有变量：以下划线开头

## 3. 组件开发规范

### 3.1 组件结构
```vue
<template>
  <div class="component-name">
    <!-- 模板内容 -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ComponentName',
  props: {
    // 属性定义
  },
  setup() {
    // 组合式API
    return {
      // 返回模板中使用的数据和方法
    }
  },
})
</script>

<style lang="scss" scoped>
.component-name {
  // 样式定义
}
</style>
```

### 3.2 Props定义规范
```typescript
props: {
  title: {
    type: String,
    required: true,
    default: '',
  },
  count: {
    type: Number,
    validator: (value: number) => value >= 0,
  },
}
```

## 4. 状态管理规范

### 4.1 Pinia Store结构
```typescript
// stores/user.ts
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.userInfo,
  },
  actions: {
    async login(credentials) {
      // 登录逻辑
    },
  },
})
```

## 5. 工具和配置

### 5.1 推荐的工具
1. **VSCode插件**：
   - Volar (Vue 3)
   - ESLint
   - Prettier
   - TypeScript Vue Plugin

2. **Git Hooks**：
```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,ts,vue}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

## 6. 文档规范

### 6.1 组件文档
```vue
<script lang="ts">
/**
 * @component ComponentName
 * @description 组件描述
 * @example
 * <ComponentName :prop1="value1" />
 */
</script>
```

### 6.2 函数文档
```typescript
/**
 * 函数描述
 * @param {string} param1 - 参数1描述
 * @returns {boolean} 返回值描述
 */
function example(param1: string): boolean {
  return true
}
```

## 7. 性能优化建议

1. **组件优化**：
   - 合理使用`v-show`和`v-if`
   - 使用`keep-alive`缓存组件
   - 避免不必要的组件渲染

2. **代码分割**：
   - 路由懒加载
   - 组件异步加载
   - 第三方库按需导入

## 8. 测试规范

### 8.1 单元测试
```typescript
// components/__tests__/ComponentName.spec.ts
import { mount } from '@vue/test-utils'
import ComponentName from '../ComponentName.vue'

describe('ComponentName', () => {
  test('renders properly', () => {
    const wrapper = mount(ComponentName)
    expect(wrapper.exists()).toBe(true)
  })
})
```

## 9. 部署规范

1. **环境配置**：
   - 开发环境（development）
   - 测试环境（testing）
   - 生产环境（production）

2. **构建优化**：
   - 压缩代码
   - 提取公共代码
   - 优化资源加载

## 10. 团队协作建议

1. **代码审查**：
   - 使用Pull Request
   - 遵循代码审查清单
   - 及时反馈和修改

2. **版本控制**：
   - 遵循Git Flow工作流
   - 规范的提交信息
   - 合理的分支管理

3. **定期同步**：
   - 技术分享会
   - 代码规范更新
   - 最佳实践讨论 
