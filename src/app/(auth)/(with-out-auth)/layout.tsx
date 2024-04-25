import { ReactNode } from "react";

const WithOutAuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {children}
      <h1>WithOutAuthLayout</h1>
    </div>
  );
};

export default WithOutAuthLayout;
