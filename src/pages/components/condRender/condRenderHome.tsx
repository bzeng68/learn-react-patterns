import React, { useState } from 'react';
import { pageFactoryInitializer } from './pageFactoryInitializer';

// Define the type for the pages
type Page = 'list' | 'details';

const condRenderHome = () => {
  const [page, setPage] = useState<Page>('list');  // 'list' or 'details'
  const [selectedUser, setSelectedUser] = useState<string>('');

  const handleUserClick = (username: string): void => {
    setSelectedUser(username);
    setPage('details');
  };

  const handleBackToList = (): void => {
    setPage('list');
  };

  const currentPage = pageFactoryInitializer(page, handleUserClick, selectedUser, handleBackToList);

  return <div>{currentPage.render()}</div>;
};

export default condRenderHome;
