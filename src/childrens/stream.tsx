import Repair from "../components/ui/meny-time use/repair";

type Props = {

}
export const StreamChild = ({ }: Props) => {
    return (
        <article className="stream">
            <Repair />
            <p>стрим не идет</p>
        </article>
    );
}