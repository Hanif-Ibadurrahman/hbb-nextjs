import Script from 'next/script';
import { ReactNode } from 'react';

import ChatBox from '@/components/organisms/ChatBox/ChatBox';
import ControlSidebar from '@/components/organisms/ControlSidebar/ControlSidebar';
import Footer from '@/components/organisms/Footer/Footer';
import Header from '@/components/organisms/Header/Header';
import Sidebar from '@/components/organisms/Sidebar/Sidebar';
import Sticky from '@/components/organisms/Sticky/Sticky';

interface Props {
  children: ReactNode;
}

// This is the place responsible for wrapping your app.
// Add here components like Footer, Nav etc.
export const MainLayout = ({ children }: Props) => (
  <body className="hold-transition light-skin sidebar-mini theme-primary fixed">
    <div className="wrapper">
      <Header />

      <Sidebar />

      <div className="content-wrapper">
        <div className="container-full">{children}</div>
      </div>

      <Footer />

      <ControlSidebar />

      <div className="control-sidebar-bg"></div>
    </div>

    <Sticky />

    <ChatBox />

    <Script src="js/vendors.min.js"></Script>
    <Script src="js/pages/chat-popup.js"></Script>
    <Script src="assets/icons/feather-icons/feather.min.js"></Script>
    <Script src="assets/vendor_components/apexcharts-bundle/dist/apexcharts.js"></Script>
    <Script src="assets/vendor_components/progressbar.js-master/dist/progressbar.js"></Script>
    <Script src="js/template.js"></Script>
    <Script src="js/pages/dashboard2.js"></Script>
  </body>
);
