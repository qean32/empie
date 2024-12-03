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
                {teams && teams.map((item: any) =>
                    <option
                        key={item.id}>
                        {item?.name} - {item?.id}
                    </option>)}
            </select>
        </div>
    );
}