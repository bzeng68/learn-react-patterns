import PageComponent from "./pageComponent";
import UsernameList from "./usernamesList";

export default class ListPage extends PageComponent {
    private onUserClick: (username: string) => void;

    constructor(onUserClick: (username: string) => void) {
        super();
        this.onUserClick = onUserClick;
    }

    render(): JSX.Element {
        return <UsernameList onUserClick={this.onUserClick} />;
    }
}