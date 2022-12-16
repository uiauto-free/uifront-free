const headerMenuConfig = [];
const asideMenuConfig = [
  {
    name: 'EXECUTE',
    path: '/',
    icon: 'chart-pie',
    children: [
      {
        name: '用例执行',
        path: '/job/execute'
      },
      {
        name: '任务分析',
        path: '/job/analysis'
      },
    ]
  },
  {
    name: 'CASE',
    path: '/',
    icon: 'warning',
    children: [
      {
        name: '用例管理',
        path: '/uiauto/case'
      },
      {
        name: '测试数据',
        path: '/uiauto/data'
      },
    ]
  },
  {
    name: 'AGENT',
    path: '/',
    icon: 'chart-bar',
    children: [
      {
        name: '资源管理',
        path: '/agent/manage'
      },
      {
        name: '运行报表',
        path: '/agent/chart'
      },
    ]
  },
  {
    name: 'ACTION',
    path: '/',
    icon: 'copy',
    children: [
      {
        name: '命令管理',
        path: '/command/manage'
      },
      {
        name: '命令分析',
        path: '/command/analysis'
      },
    ]
  }
  ,
  {
    name: 'TASK',
    path: '/',
    icon: 'calendar',
    children: [
      {
        name: '任务管理',
        path: '/task/manage'
      },
      {
        name: '任务历史',
        path: '/task/history'
      },
    ]
  }
  // {
  //   name: '数据页面',
  //   path: '/',
  //   icon: 'chart-pie',
  //   children: [
  //     {
  //       name: '分析页面',
  //       path: '/dashboard/analysis',
  //     },
  //     {
  //       name: '工作台',
  //       path: '/dashboard/workplace',
  //     },
  //   ],
  // },
  // {
  //   name: '表单页面',
  //   path: '/',
  //   icon: 'copy',
  //   children: [
  //     {
  //       name: '单列表单',
  //       path: '/form/basic',
  //     },
  //     {
  //       name: '两列表单',
  //       path: '/form/two',
  //     },
  //     {
  //       name: '三列表单',
  //       path: '/form/three',
  //     },
  //     {
  //       name: '四列表单',
  //       path: '/form/four',
  //     },
  //     {
  //       name: '分步表单',
  //       path: '/form/step',
  //     },
  //     {
  //       name: '分类表单',
  //       path: '/form/classified',
  //     },
  //     {
  //       name: '分组表单',
  //       path: '/form/group',
  //     },
  //     {
  //       name: '流程表单',
  //       path: '/form/flow',
  //     },
  //     {
  //       name: '分级表单',
  //       path: '/form/hierarchical',
  //     },
  //   ],
  // },
  // {
  //   name: '列表页面',
  //   path: '/',
  //   icon: 'chart-bar',
  //   children: [
  //     {
  //       name: '基础列表',
  //       path: '/list/basic',
  //     },
  //     {
  //       name: '卡片列表',
  //       path: '/list/card',
  //     },
  //     {
  //       name: '表格列表',
  //       path: '/',
  //       children: [
  //         {
  //           name: '基础过滤',
  //           path: '/list/table/filter',
  //         },
  //         {
  //           name: '单列过滤',
  //           path: '/list/table/singlecol',
  //         },
  //         {
  //           name: '多列过滤',
  //           path: '/list/table/mutilcol',
  //         },
  //         {
  //           name: '带操作列',
  //           path: '/list/table/action',
  //         },
  //         {
  //           name: '可展开表',
  //           path: '/list/table/expand',
  //         },
  //         {
  //           name: '单层树表',
  //           path: '/list/table/singletree',
  //         },
  //         {
  //           name: '弹窗表格',
  //           path: '/list/table/dialog',
  //         },
  //         {
  //           name: '合并单元格',
  //           path: '/list/table/mergecell',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   name: '详情页面',
  //   path: '/',
  //   icon: 'calendar',
  //   children: [
  //     {
  //       name: '基础详情',
  //       path: '/detail/basic',
  //     },
  //     {
  //       name: '高级详情',
  //       path: '/detail/advanced',
  //     },
  //   ],
  // },
  // {
  //   name: '结果&缺省',
  //   path: '/',
  //   icon: 'warning',
  //   children: [
  //     {
  //       name: '成功页面',
  //       path: '/feedback/success',
  //     },
  //     {
  //       name: '失败页面',
  //       path: '/feedback/fail',
  //     },
  //     {
  //       name: '403',
  //       path: '/feedback/403',
  //     },
  //     {
  //       name: '404',
  //       path: '/feedback/404',
  //     },
  //     {
  //       name: '500',
  //       path: '/feedback/500',
  //     },
  //   ],
  // },
  // {
  //   name: '设置页面',
  //   path: '/',
  //   icon: 'set',
  //   children: [
  //     {
  //       name: '系统设置',
  //       path: '/settings',
  //     },
  //     {
  //       name: '个人设置',
  //       path: '/person',
  //     },
  //   ],
  // },
  // {
  //   name: '登录&注册',
  //   path: '/',
  //   icon: 'account',
  //   children: [
  //     {
  //       name: '登录',
  //       path: '/user/login',
  //     },
  //     {
  //       name: '注册',
  //       path: '/user/register',
  //     },
  //   ],
  // },
];
export { headerMenuConfig, asideMenuConfig };
