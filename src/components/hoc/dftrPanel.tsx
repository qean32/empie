import { RightPanelDirectionChildren } from "../../childrens/rightPanel";
import { RightTransferChild } from "../../childrens/rightTransfer";
import { StreamChild } from "../../childrens/stream";
import { TopTeamChild } from "../../childrens/topTeam";
import { RightPanel } from "./rightPanel";

type Props = {
    direction: number
}
export const DftRPanel = ({ direction }: Props) => {
    return (
        <div>
            <RightPanel><RightPanelDirectionChildren direction={0} /></RightPanel>
            <RightPanel><RightTransferChild /></RightPanel>
            <RightPanel><TopTeamChild /></RightPanel>
            <RightPanel><StreamChild /></RightPanel>
        </div>
    );
}