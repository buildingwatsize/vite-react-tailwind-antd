import { Layout } from "antd";

import NavBar from "components/Common/NavBar";
import Version from "components/Common/Version";

const { Content } = Layout;

const MainLayout = ({ children, style, navBarfullSize = true }) => {
  return (
    <Layout
      data-testid="mainLayoutContainer"
      className="relative min-h-screen"
      style={{ background: "linear-gradient(135deg, #F8F7F4, #F1F0EC)" }}
    >
      <NavBar fullSize={navBarfullSize} />
      <Content
        data-testid="mainLayoutContent"
        className={"mt-[64px] px-[5%] pb-[5%]"}
        style={style}
      >
        <div className="mb-4 mt-4 rounded-md border border-[#D8D6D0] bg-white/70 p-4 shadow-sm backdrop-blur-sm">
          {children}
        </div>
      </Content>
      <Version />
    </Layout>
  );
};

export default MainLayout;
