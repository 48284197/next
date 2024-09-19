import type { ReactNode } from 'react';

// import { Footer } from './footer/Footer';
import CenterNav from './nav/centerNav';

type Props = {
  children?: ReactNode;
};

const Base = ({ children }: Props) => {
  return (
    <div className="text-gray-600 antialiased ">
      <CenterNav></CenterNav>
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export { Base };
