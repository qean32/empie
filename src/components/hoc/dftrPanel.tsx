import { RightPanelDirectionChildren } from "../../childrens/other/rightPanel";
import { RightTransferChild } from "../../childrens/other/rightTransfer";
import { StreamChild } from "../../childrens/other/stream";
import { TopTeamChild } from "../../childrens/other/topTeam";
import { RightPanel } from "./rightPanel";


export const DftRPanel = ({ direction }: { direction: number }) => {
    return (
        <div className="right">
            <RightPanel><RightPanelDirectionChildren direction={direction} /></RightPanel>
            <RightPanel><RightTransferChild el={undefined} /></RightPanel>
            <RightPanel><TopTeamChild /></RightPanel>
            <RightPanel><StreamChild /></RightPanel>
        </div>
    );
}