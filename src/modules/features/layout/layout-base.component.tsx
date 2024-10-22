import { BarTop } from "../../core/components/bar-top.component";
import { Header } from "../../core/components/header.component";
interface LayoutBase {
  children: string;
}
export const LayoutBase = ({ children }: LayoutBase) => {
  return (
    <div>
      <BarTop text="Sign up and get 20% off to your first order. Sign Up Now" />
      <Header />
      {children}
    </div>
  );
};
