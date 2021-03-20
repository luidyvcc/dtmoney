import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { SwitchTheme } from './components/SwitchTheme';
import { useTheme } from './hooks/useTheme';
import { TransactionsProvider } from './hooks/useTransactions';

import { GlobalStyles } from './theme/GlobalStyles';
import { getLocalStorage, setLocalStorage } from './utils/storage';

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  const { theme, isLoadingTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(getLocalStorage('theme') || theme);

  useEffect(() => {
    setSelectedTheme(selectedTheme);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingTheme]);

  useEffect(() => {
    setLocalStorage('theme', selectedTheme);
  }, [selectedTheme]);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  
  return isLoadingTheme ? (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <TransactionsProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

        <Dashboard />

        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />

        <SwitchTheme theme={selectedTheme} setter={setSelectedTheme} />
      </TransactionsProvider>
    </ThemeProvider>
  ) : <></>;
}
