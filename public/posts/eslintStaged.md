# ESLint只检查新改动代码的配置指南

## 1. 使用lint-staged

lint-staged是一个工具，可以只对Git暂存区（staged）的文件运行linters。

### 1.1 安装依赖
```bash
npm install -D lint-staged husky
```

### 1.2 配置package.json
```json
{
  "scripts": {
    "prepare": "husky install"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx,vue}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

### 1.3 配置Git Hooks
```bash
# 初始化husky
npx husky install

# 添加pre-commit hook
npx husky add .husky/pre-commit "npx lint-staged"
```

## 2. 使用ESLint的--cache选项

### 2.1 配置package.json脚本
```json
{
  "scripts": {
    "lint": "eslint . --cache",
    "lint:fix": "eslint . --cache --fix"
  }
}
```

### 2.2 配置.eslintrc.js
```javascript
module.exports = {
  // ... 其他配置
  cache: true,
  cacheLocation: './node_modules/.cache/eslint'
}
```

## 3. 使用.gitignore忽略缓存文件

```gitignore
# .gitignore
.eslintcache
node_modules/.cache/eslint
```

## 4. 配置ESLint忽略文件

### 4.1 创建.eslintignore文件
```text
# .eslintignore
node_modules
dist
build
coverage
*.min.js
```

### 4.2 在.eslintrc.js中配置ignorePatterns
```javascript
module.exports = {
  // ... 其他配置
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    'coverage/',
    '*.min.js'
  ]
}
```

## 5. 使用ESLint的--max-warnings选项

```json
{
  "scripts": {
    "lint": "eslint . --cache --max-warnings 0"
  }
}
```

## 6. 实际使用示例

### 6.1 开发工作流
1. 修改代码
2. 暂存修改的文件
3. 提交代码时自动运行lint-staged
4. 只有修改的文件会被检查

### 6.2 完整配置示例
```javascript
// .eslintrc.js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
  ],
  rules: {
    // 你的规则配置
  },
  cache: true,
  cacheLocation: './node_modules/.cache/eslint',
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    'coverage/',
    '*.min.js'
  ]
}
```

```json
// package.json
{
  "scripts": {
    "lint": "eslint . --cache --max-warnings 0",
    "lint:fix": "eslint . --cache --fix",
    "prepare": "husky install"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx,vue}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

## 7. 性能优化建议

1. **使用缓存**：
   - 启用ESLint缓存
   - 使用lint-staged只检查修改的文件

2. **优化配置**：
   - 合理设置ignorePatterns
   - 使用适当的规则集

3. **CI/CD集成**：
   - 在CI中只检查修改的文件
   - 使用缓存加速检查

## 8. 常见问题解决

1. **缓存问题**：
   - 清除缓存：删除.eslintcache文件
   - 重新运行：npm run lint

2. **性能问题**：
   - 检查ignorePatterns配置
   - 优化规则配置

3. **Git Hooks问题**：
   - 确保husky正确安装
   - 检查pre-commit hook配置 
