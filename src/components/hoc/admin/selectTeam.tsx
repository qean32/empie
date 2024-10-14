type Props = {
    teams: any[]
    setTeam: Function
}
export const SelectTeam = ({ teams, setTeam }: Props) => {

    const SelectTeam = (e: any) => {
        setTeam((e.target.value).split('-')[(e.target.value).split('-').length - 1])
    }

    return (
        <div>
            <select onChange={SelectTeam}>
                {teams.map((item, index) =>
                    <option
                        key={index}>
                        ROKUZAN asdas - 22
                    </option>)}
            </select>
        </div>
    );
}