import React, { ReactNode, useState } from "react";
import Verticalbar from "./VerticalNavbar";
import HorizontalBar from "./HorizontalBar";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {

  const isEditorRoute = false;
  const [pageVisible, setPageVisible] = useState(false);
  const [isSignOutModalVisible, setIsSignOutModalVisible] = useState(false);

  const handleTogglePageVisible = (visible) => {
    setPageVisible(visible);
  };

  const handleToggleSignOutModalVisible = (visible: boolean) => {
    setIsSignOutModalVisible(visible);
  };

  return (
    <>
      <div className="flex flex-col">
      {!isEditorRoute && (
        <div className="w-full sticky top-0 z-20">
          <HorizontalBar />
        </div>
      )}
         <div className={`flex ${isSignOutModalVisible  ? "-z-10" : ""}`}>
          {!isEditorRoute && (
            <div className={`${pageVisible} ? "xl:w-[25%]" : "" ${pageVisible}? '' : 'xl:w-[8%]' xl:fixed z-30`}>
              <Verticalbar
              />
            </div>
          )}
          <div className={`${!isEditorRoute && pageVisible ? "xl:pl-[20%] " : ""} w-full`}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;