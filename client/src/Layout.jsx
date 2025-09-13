import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import useModalHooks from "./hooks/useModalHooks";
import BasicModalComponent from "./components/modals/BasicModalComponent";
import LoginForm from "./components/form/LoginForm";
import SIgnUpForm from "./components/form/SIgnUpForm";
import AddEventForm from "./components/form/AddEventForm";
const Layout = () => {
  const {
    isLoginOpen,
    isSignUpOpen,
    isEventOpen,
    handleLoginToggle,
    handleSignUpToggle,
    handleOpenLogin,
    handleOpenSignUp,
    handleOpenEvent,
    handleEventToggle
  } = useModalHooks();

  return (
    <>
      {isLoginOpen && (
        <BasicModalComponent  onClose={handleLoginToggle}> 
          <LoginForm changeForm = {handleOpenSignUp}/>
        </BasicModalComponent> 
      )}
      {isSignUpOpen && (
        <BasicModalComponent  onClose={handleSignUpToggle}> 
          <SIgnUpForm changeForm={handleOpenLogin} />
        </BasicModalComponent> 
      )}

      {isEventOpen && (
        <BasicModalComponent  onClose={handleEventToggle}> 
        <AddEventForm />
        </BasicModalComponent> 
      )}

      <HeaderComponent
        handleLoginToggle={handleOpenLogin}
        handleSignUpToggle={handleOpenSignUp}
      />
      <Outlet 
      context={{handleOpenEvent}}/>
    </>
  );
};

export default Layout;
