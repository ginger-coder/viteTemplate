export default {
  getWxAboutData: `/api/v1/enterprisewechat/js/sign`,
  getAuth: '/api/v1/enterprisewechat/auth',
  getStuInfo: '/api/v1/enterprisewechat/stu/info', //通过学生user_id检索学生
  search_stu: '/api/v1/enterprisewechat/student/bymobile', //通过手机号搜索学生信息
  stu_bind: ['/api/v1/enterprisewechat/bind',"POST", "body"], //绑定
  stu_unbind: '/api/v1/enterprisewechat/unbind', //绑定
}