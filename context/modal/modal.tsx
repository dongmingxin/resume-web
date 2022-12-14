import React, { createContext, useContext, useState } from "react";
import ContactModal from "../../components/contactModal";

type ModelContextProps = {
  showModal: boolean,
  toggleModal: ()=>void
}

type ContactModel = {
  children: React.ReactNode,
}

const ModalContext = createContext<ModelContextProps>({
  showModal: false,
  toggleModal: ()=>{}
})

const { Provider } = ModalContext

export const ModalProvider = ({
  children
}:ContactModel) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = () => {
    setShowModal(pre=>!pre)
  } 

  return (
    <Provider value={{showModal, toggleModal}}>
      {showModal && <ContactModal toggleModal={toggleModal}/>}
      {children}
    </Provider>
  )
}

export const useModelContext = () => useContext(ModalContext);