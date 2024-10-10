import PageComponent from "./pageComponent";
import UserDetails from "./userDetails";

export default class DetailsPage extends PageComponent {
    private username: string;
    private onBack: () => void;

    constructor(username: string, onBack: () => void) {
        super();
        this.username = username;
        this.onBack = onBack;
    }

    render(): JSX.Element {
        return <UserDetails username={this.username} onBack={this.onBack} />;
    }
}