import { GridPoint } from "../../components/ui/meny-time use/gridPoint";

type Props = {

}
export const MoveonGridChild = ({ }: Props) => {
    return (
        <div className="rightcontainer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
            <div style={{ width: '70%', padding: '0 0 0 20px' }}>
                <div className="lineprev"></div>
                <div className="line" style={{ width: '200px' }}>
                    <div className="linevertical" style={{ height: '52px' }}></div>
                </div>
                <GridPoint />
            </div>
        </div>
    );
}