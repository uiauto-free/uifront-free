import React, { useEffect, useState } from 'react';
import { Shell, ConfigProvider } from '@alifd/next';
import PageNav from './components/PageNav';
import GlobalSearch from './components/GlobalSearch';
import Notice from './components/Notice';
import SolutionLink from './components/SolutionLink';
import HeaderAvatar from './components/HeaderAvatar';
import Logo from './components/Logo';
import Footer from './components/Footer';
import store from '@/store'

(function () {
  const throttle = function (type, name, obj = window) {
    let running = false;

    const func = () => {
      if (running) {
        return;
      }

      running = true;
      requestAnimationFrame(() => {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };

    obj.addEventListener(type, func);
  };

  if (typeof window !== 'undefined') {
    throttle('resize', 'optimizedResize');
  }
})();

export default function BasicLayout({ children }) {
  const [userState, userDispathch] = store.useModel("user")
  const {loaded, userProfile} = userState;
  useEffect(()=>{
    userDispathch.fetchUserProfile();
  }, []);
  const getDevice = (width) => {
    const isPhone = typeof navigator !== 'undefined' && navigator && navigator.userAgent.match(/phone/gi);

    if (width < 680 || isPhone) {
      return 'phone';
    } else if (width < 1280 && width > 680) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  };

  const [device, setDevice] = useState(getDevice(NaN));

  if (typeof window !== 'undefined') {
    window.addEventListener('optimizedResize', (e) => {
      const deviceWidth = (e && e.target && e.target.innerWidth) || NaN;
      setDevice(getDevice(deviceWidth));
    });
  }

  return (
    <ConfigProvider device={device}>
      <Shell
        style={{
          minHeight: '100vh',
        }}
        type="brand"
        fixedHeader={false}
      >
        <Shell.Branding>
          <Logo image="https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png" text="UIAUTO-FREE" />
        </Shell.Branding>
        <Shell.Navigation
          direction="hoz"
          style={{
            marginRight: 10,
          }}
        >
          <GlobalSearch />
        </Shell.Navigation>
        <Shell.Action>
          <Notice />
          <SolutionLink />
          <HeaderAvatar props={userProfile}/>
        </Shell.Action>
        <Shell.Navigation>
          <PageNav />
        </Shell.Navigation>

        <Shell.Content>{children}</Shell.Content>
        <Shell.Footer>
          <Footer />
        </Shell.Footer>
      </Shell>
    </ConfigProvider>
  );
}
