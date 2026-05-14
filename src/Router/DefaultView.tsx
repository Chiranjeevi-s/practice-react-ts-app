import { Outlet } from "react-router-dom";
import "./DefaultView.css";

const DefaultView: React.FC = () => {
  return (
    <div style={{ height: "calc(100vh - 16px)" }}>
      <div className="header">Header</div>
      <div>
        <Outlet />
      </div>
      <div className="footer">Footer</div>
    </div>
  );
};

export default DefaultView;
