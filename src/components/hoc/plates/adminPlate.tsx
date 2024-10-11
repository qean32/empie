import { useContext } from "react";
import { SmallCenterPlate } from "./centerPlate";
import { SomeContext } from "../../../context";


export const AdminPlate = ({ children }: { children: any }) => {
    const { user }: any = useContext(SomeContext)

    return (
        <>
            {user?.is_org &&
                <SmallCenterPlate>
                    <div className="dftcontainer" style={{ justifyContent: 'start' }}>
                        <div className="dftcontainer" style={{ flexDirection: 'column', gap: '60px', alignItems: 'start', padding: '0 0 100px 50px' }}>
                            <p>ADMIN PANEL</p>
                            {children}
                        </div>
                    </div>
                </SmallCenterPlate>
            }
        </>
    );
}