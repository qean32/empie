import { useContext } from "react";
import { SomeContext } from "../../../context";


export const AdminSmallPanel = ({ children }: { children: any }) => {
    const { user }: any = useContext(SomeContext)

    return (
        <>
            {user?.is_org &&
                <>
                    {children}
                </>
            }
        </>
    );
}