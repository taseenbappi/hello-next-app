import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  analytics: ReactNode;
  notification: ReactNode;
  revenue: ReactNode;
  login: ReactNode;
}

const ComplexDashboardLayout: FC<Props> = ({
  children,
  analytics,
  notification,
  revenue,
  login,
}) => {
  const isLogged = true;
  return (
    <div>
      <div>{children}</div>
      {isLogged ? (
        <div className="flex gap-2 p-3">
          <div className="flex flex-col gap-2">
            <div>{analytics}</div>
            <div>{notification}</div>
          </div>
          <div className="flex ">{revenue}</div>
        </div>
      ) : (
        <div className="flex gap-2">{login}</div>
      )}
    </div>
  );
};

export default ComplexDashboardLayout;
