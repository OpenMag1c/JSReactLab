import { FC } from "react";
import Modal from "@/components/modal/modal";
import SignIn from "@/components/forms/signIn/signIn";
import SignUp from "@/components/forms/signUp/signUp";
import ChangePassword from "@/components/forms/changePassword/changePassword";
import Error from "@/components/elements/error/error";
import useActions from "@/hooks/useActions";
import useTypedSelector from "@/hooks/useProtectedSelector";
import EditCard from "@/components/forms/editCard/editCard";
import CreateCard from "@/components/forms/editCard/createCard";

const Modals: FC = () => {
  const { openError, openPassword, openRegister, openLogin, openEditCard, openCreateCard } = useActions();
  const { isRegisterOpen, isLoginOpen, errorMessage, isError, isPasswordOpen, isEditCard, editCard, isNewCard } =
    useTypedSelector((state) => state.modal);

  return (
    <>
      <Modal active={isLoginOpen} setActive={openLogin}>
        <SignIn />
      </Modal>
      <Modal active={isRegisterOpen} setActive={openRegister}>
        <SignUp />
      </Modal>
      <Modal active={isPasswordOpen} setActive={openPassword}>
        <ChangePassword />
      </Modal>
      <Modal active={isError} setActive={openError}>
        <Error message={errorMessage} />
      </Modal>
      <Modal active={isEditCard} setActive={openEditCard}>
        <EditCard editCard={editCard} />
      </Modal>
      <Modal active={isNewCard} setActive={openCreateCard}>
        <CreateCard />
      </Modal>
    </>
  );
};

export default Modals;
