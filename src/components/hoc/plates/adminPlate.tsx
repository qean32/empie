import { SmallCenterPlate } from "./centerPlate";

type Props = {
    children: any
}
export const AdminPlate = ({ children }: Props) => {
    return (
        <SmallCenterPlate>
            <div className="dftcontainer" style={{ justifyContent: 'start' }}>
                <div className="dftcontainer" style={{ flexDirection: 'column', gap: '60px', alignItems: 'start', padding: '0 0 100px 50px' }}>
                    <p>ADMIN PANEL</p>
                    {children}
                </div>
            </div>
        </SmallCenterPlate>
    );
}