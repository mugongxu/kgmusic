/*
 * The following parameters must be specified before submitting pipeline
 *   - VERSION: 1.0.0
 *   - BRANCH_NAME: develop
 *   - ENV_TAG: dev
 */
env.BRANCH_NAME = env.gitlabSourceBranch
env.VERSION = '1.0.0'

/****************************************/
/*          CI步骤需要的参数            */
/****************************************/
/*源代码git库的访问URL路径*/
env.SOURCE_GIT_URL = 'https://github.com/mugongxu/kgmusic.git'
/*部署包git库的访问URL路径*/
env.BINARY_GIT_URL = ''
/*clone部署包git库到指定本地路径*/
env.BINARY_LOCAL_LOC = ''
/*CI运行环境的机器地址*/
env.CI_NODE = 'ci-192.168.20.40'

/****************************************/
/*          CD步骤需要的参数            */
/****************************************/
/*应用运行环境的机器地址*/
env.DEPLOY_NODE = 'lan-dev-ins'
/*应用部署包安装路径*/
env.DEPLOY_LIB_LOC = '/data/ui/kgmusic'
/*应用实例工作目录*/
env.DEPLOY_INSTS_LOC = ''
/*应用运行用户*/
env.DEPLOY_USER = 'root'

/* 连接服务器 */
def GetRemoteServer(user, ip, password) {
  def remote = [:]

  remote.name = ip
  remote.host = ip
  remote.user = user
  remote.port = 22
  remote.password = password
  remote.allowAnyHosts = true

  return remote
}

node(env.CI_NODE) {

  try {
    env.TAG_NAME = 'v' + env.VERSION + '-' + new Date().format('yyyyMMdd-HHmm', TimeZone.getTimeZone('CTT'))
    sh 'echo TAG_NAME=$TAG_NAME' 

    sh 'echo BRANCH_NAME=$GIT_BRANCH'
    sh 'echo BRANCH_NAME=$BRANCH_NAME'
  
    stage('CI-build') {
      git branch: env.BRANCH_NAME, credentialsId: '6b144467-9606-4b96-8833-6d8895c3c178', url: env.SOURCE_GIT_URL

      /* 如果是master分支，进行tag处理 */
      if (env.BRANCH_NAME == 'master') {
      }
    }

    stage('test') {
      echo 'project test eg: ESLint、Jest、E2E、Mock'
    }

    stage('CD-build') {
      /* 根据不同的分支部署到不同的服务器上 */
      if (env.BRANCH_NAME == 'develop') {
        server = GetRemoteServer('xuguoqian', '192.168.172.44', 'erp@123')
        sshCommand remote: server, command: '''
          cd $DEPLOY_LIB_LOC
          sudo -u $DEPLOY_USER git fetch origin
          sudo -u $DEPLOY_USER git tag
          sudo -u $DEPLOY_USER git branch -vv
          sudo -u $DEPLOY_USER git status
          sudo -u $DEPLOY_USER git checkout env.BRANCH_NAME
          sudo -u $DEPLOY_USER git status
        '''
      }
    }
  } catch(err) {
    throw err
  }
}

