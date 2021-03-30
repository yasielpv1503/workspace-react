import './App.css';
import { Row, Col, Layout } from 'antd';
import "antd/dist/antd.css";
import WorkspaceForm from './components/WorkspaceForm';
import WorlspaceList from './components/WorlspaceList';
import { AppContextProvider } from './app-context';
const { Header, Content, Footer } = Layout;

const App = () => {

  return (<>
    <AppContextProvider>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>          
        </Header>
        <Content className="site-layout" style={{ padding: '1px0 50px', marginTop: 64, paddingTop: 20 }}>
          <Row gutter={16}>
            <Col  xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 10 }}>
             
              <WorkspaceForm />
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 14 }}>
              <WorlspaceList />
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design 2021 Created by Ant UED</Footer>
      </Layout>,
    </AppContextProvider>
  </>);
}

export default App;
