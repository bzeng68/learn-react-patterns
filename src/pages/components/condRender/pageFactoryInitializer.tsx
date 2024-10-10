import PageComponent from "./pageComponent";
import ListPage from "./ListPage";
import DetailsPage from "./DetailsPage";

export const pageFactoryInitializer = (
    pageName: string,
    onUserClick: (username: string) => void,
    selectedUser: string,
    onBack: () => void
  ): PageComponent => {
    switch (pageName) {
      case 'list':
        return new ListPage(onUserClick);
      case 'details':
        return new DetailsPage(selectedUser, onBack);
      default:
        return new ListPage(onUserClick);
    }
  };