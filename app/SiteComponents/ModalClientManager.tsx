'use client';
import { useState, createContext, useContext, ReactNode } from 'react';
import ConsultationModal from './ConsultationModal';

interface ModalContextType {
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalClientManager');
  }
  return context;
};

interface ModalClientManagerProps {
  children: ReactNode;
}

const ModalClientManager: React.FC<ModalClientManagerProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, handleOpenModal, handleCloseModal }}>
      <ConsultationModal isOpen={isModalOpen} onClose={handleCloseModal} />
      {children}
    </ModalContext.Provider>
  );
};

export default ModalClientManager;
