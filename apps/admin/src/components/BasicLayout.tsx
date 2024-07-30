import { IconSemiLogo } from '@douyinfe/semi-icons'
import { IconAccessibility } from '@douyinfe/semi-icons-lab'
import { Avatar, Layout, Nav } from '@douyinfe/semi-ui'
import { FC, ReactNode } from 'react'
const { Header, Footer, Sider, Content } = Layout

const BasicLayout: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <Layout className='h-screen'>
      <Header>
        <Nav
          mode='horizontal'
          header={{
            logo: <IconSemiLogo className='h-6 w-6 text-[24px]' />,
            text: 'Miss Yvonne',
          }}
          footer={
            <>
              <Avatar
                size='small'
                color='violet'
                className='mx-2'
              >
                H
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
            footer={{ collapseButton: true }}
          />
        </Sider>
        <Layout>
          <Content className='text-center'>{children}</Content>
          <Footer className='h-10 text-center text-xs leading-10 text-gray-500'>
            Miss Yvonne ©2024 Created by HazySoda
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default BasicLayout
