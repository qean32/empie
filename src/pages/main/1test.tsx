import { useContext, useState } from "react";
import { Header } from "../../components/ui/header"
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/loader";
import { InputDate, InputTime } from "../../components/ui/customInput";
import moment from "moment";

type Props = {

}
export const Test = ({ }: Props) => {
    const { loading } = useContext<any>(SomeContext)
    // const [value, setValue] = useState<any>(() => moment(new Date).format("YYYY-MM-DD"))
    const [value, setValue] = useState<any>()
    return (
        <>
            <Header />
            {loading ? <div><MainLoader /></div> :
                <div>
                    <div className="center">
                        <div className="centerplate" style={{ gap: '20px', padding: '30vh 0'}}>
                            <InputTime value={value} setValue={setValue} />
                            <div className="under-color"></div>
                        </div>
                        {/* <CenterPlate /> */}
                    </div>
                </div>}
        </>
    );
}