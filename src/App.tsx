import { LayoutBase } from './modules/core/components/layout/layout-base.component';
import { HomeScreen } from './modules/features/home/components/home-screen.component';

function Home() {
  return (
    <LayoutBase>
      <HomeScreen />
    </LayoutBase>
  );
}

export default Home;
