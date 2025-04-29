import Accordion from "./components/Accordion/Accordion";

import AccordionItem from "./components/Accordion/AccordionItem";
import { Tab, Tabs } from "./components/Tabs";

function App01() {
    // const handSubmit = (data) => {
    //     console.log(data);
    // };

    return (
        <>
            <Tabs defaultIndex={0} onChange={(index) => console.log(index)}>
                <Tab title="Tab 1">Content of Tab 1</Tab>

                <Tab title="Tab 2">Content of Tab 2</Tab>

                <Tab title="Tab 3">Content of Tab 3</Tab>

                <Tab title="Tab 4">Content of Tab 4</Tab>

                <Tab title="Tab 5">Content of Tab 5</Tab>
            </Tabs>

            <Accordion
                defaultIndex={0}
                onChange={(index) => console.log(index)}
                collapseOthers={false}
            >
                <AccordionItem header="Accordion 1">
                    Nội dung của Accordion 1
                </AccordionItem>
                <AccordionItem header="Accordion 2">
                    Nội dung của Accordion 2
                </AccordionItem>
                <AccordionItem header="Accordion 3">
                    Nội dung của Accordion 3
                </AccordionItem>
            </Accordion>
        </>
    );
}

export default App01;
