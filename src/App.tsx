import {Header} from "./sections/Header";

const App = () => {

    return (
        <div tw={"flex justify-center mt-[200px]"}>
            <div tw={"flex-col w-[800px]"}>
                <Header/>
                <div tw={"flex flex-col w-full mt-[30px]"}>

                </div>
            </div>
        </div>
    );

};

export default App;
