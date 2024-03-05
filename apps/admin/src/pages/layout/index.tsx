import { Layout } from '@douyinfe/semi-ui'
const { Header, Footer, Sider, Content } = Layout

const Layouts = () => {
  const commonStyle = {
    height: 64,
    lineHeight: '64px',
    background: 'var(--semi-color-fill-0)',
  }
  return (
    <Layout className='h-screen'>
      <Sider style={{ width: '120px', background: 'var(--semi-color-fill-2)' }}>
        Sider
      </Sider>
      <Layout>
        <Header style={commonStyle}>Header</Header>
        <Content style={{ height: 300, lineHeight: '300px' }}>Content</Content>
        <Footer style={commonStyle}>Footer</Footer>
      </Layout>
    </Layout>
  )
}

export default Layouts
