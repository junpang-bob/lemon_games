# ESLint 9 重要更新指南

## 1. 主要更新内容

### 1.1 性能优化
- 重写了核心解析器，提升解析速度
- 优化了规则执行机制
- 改进了缓存系统

### 1.2 配置系统更新
```javascript
// 新的配置格式
export default {
  languageOptions: {
    ecmaVersion: 2024,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json'
    }
  },
  linterOptions: {
    reportUnusedDisableDirectives: true
  },
  rules: {
    // 规则配置
  }
}
```

### 1.3 新的规则系统
- 支持异步规则
- 改进了规则上下文API
- 新增规则元数据系统

## 2. 破坏性更新

### 2.1 配置格式变化
- 移除了`parserOptions`顶层配置
- 移除了`env`顶层配置
- 移除了`extends`顶层配置

### 2.2 规则变化
- 移除了一些过时的规则
- 更新了部分规则的默认配置
- 新增了一些规则

### 2.3 插件系统更新
```javascript
// 新的插件格式
export default {
  name: 'my-plugin',
  rules: {
    'my-rule': {
      meta: {
        type: 'suggestion',
        docs: {
          description: '规则描述'
        }
      },
      create(context) {
        // 规则实现
      }
    }
  }
}
```

## 3. 新特性

### 3.1 改进的错误报告
```javascript
// 新的错误报告API
context.report({
  node,
  messageId: 'errorMessage',
  data: {
    variable: 'name'
  },
  fix(fixer) {
    return fixer.replaceText(node, 'fixed code')
  }
})
```

### 3.2 新的配置继承系统
```javascript
// 新的配置继承
export default {
  files: ['**/*.ts'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  languageOptions: {
    parser: '@typescript-eslint/parser'
  }
}
```

### 3.3 改进的TypeScript支持
- 更好的类型推断
- 改进的TSConfig集成
- 新的TypeScript特定规则

## 4. 迁移指南

### 4.1 配置文件迁移
```javascript
// 旧配置
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  env: {
    browser: true
  }
}

// 新配置
export default {
  languageOptions: {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json'
    },
    globals: {
      window: true,
      document: true
    }
  }
}
```

### 4.2 插件迁移
```javascript
// 旧插件格式
module.exports = {
  rules: {
    'my-rule': {
      create(context) {
        // 规则实现
      }
    }
  }
}

// 新插件格式
export default {
  name: 'my-plugin',
  rules: {
    'my-rule': {
      meta: {
        type: 'suggestion',
        docs: {
          description: '规则描述'
        }
      },
      create(context) {
        // 规则实现
      }
    }
  }
}
```

## 5. 性能优化建议

1. **使用新的缓存系统**：
```javascript
// .eslintrc.js
export default {
  linterOptions: {
    cache: true,
    cacheLocation: './node_modules/.cache/eslint'
  }
}
```

2. **优化规则配置**：
```javascript
export default {
  rules: {
    // 只启用必要的规则
    'no-console': 'warn',
    'no-debugger': 'warn'
  }
}
```

## 6. 最佳实践

1. **使用新的配置格式**：
   - 采用ESM模块格式
   - 使用新的配置结构
   - 利用新的语言选项

2. **优化规则使用**：
   - 使用规则元数据
   - 利用新的错误报告API
   - 采用异步规则

3. **TypeScript集成**：
   - 使用新的TypeScript支持
   - 配置适当的解析器选项
   - 利用类型检查

## 7. 常见问题

1. **配置迁移问题**：
   - 检查配置格式
   - 更新插件使用
   - 验证规则配置

2. **性能问题**：
   - 使用新的缓存系统
   - 优化规则配置
   - 检查解析器设置

3. **TypeScript问题**：
   - 更新TypeScript配置
   - 检查类型定义
   - 验证解析器设置
