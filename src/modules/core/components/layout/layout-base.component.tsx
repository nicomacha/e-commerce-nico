import { BarTop } from '../bar-top.component';
import { Header } from '../header.component';

interface LayoutBase {
  children: JSX.Element | React.ReactNode;
}

export const LayoutBase = ({ children }: LayoutBase) => {
  return (
    <div>
      <BarTop text='Sign up and get 20% off to your first order. Sign Up Now' />
      <Header />
      {children}
    </div>
  );
};
