import { Tab, Tabs } from "@/components/Tabs";

const Home = () => {
    return (
        <div>
            Home
            <Tabs defaultIndex={0} onChange={(index) => console.log(index)}>
                <Tab title="Tab 1">Content of Tab 1</Tab>

                <Tab title="Tab 2">Content of Tab 2</Tab>

                <Tab title="Tab 3">Content of Tab 3</Tab>

                <Tab title="Tab 4">Content of Tab 4</Tab>

                <Tab title="Tab 5">Content of Tab 5</Tab>
            </Tabs>
        </div>
    );
};

export default Home;
