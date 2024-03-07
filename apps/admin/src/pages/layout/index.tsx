import { IconSemiLogo } from '@douyinfe/semi-icons'
import { IconAccessibility } from '@douyinfe/semi-icons-lab'
import { Avatar, Layout, Nav } from '@douyinfe/semi-ui'
import clsx from 'clsx'
const { Header, Footer, Sider, Content } = Layout

const Layouts = () => {
  return (
    <Layout className='h-screen'>
      <Header>
        <Nav
          className='nav-bar-common'
          mode='horizontal'
          onSelect={console.log}
          header={{
            logo: <IconSemiLogo className='nav-bar-logo' />,
            text: 'Miss Yvonne',
          }}
          footer={
            <>
              <Avatar
                size='small'
                color='violet'
                className='mx-2'
              >
                HS
              </Avatar>
              <span>HazySoda</span>
            </>
          }
        />
      </Header>
      <Layout>
        <Sider>
          <Nav
            className='h-full'
            items={[
              {
                itemKey: 'weight',
                text: '体重管理',
                icon: <IconAccessibility />,
              },
            ]}
            onSelect={console.log}
            footer={{ collapseButton: true }}
          />
        </Sider>
        <Layout>
          <Content className='text-center'>Content</Content>
          <Footer className={clsx('text-gray-500', 'nav-bar-common')}>
            Miss Yvonne ©2024 Created by HazySoda
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Layouts
