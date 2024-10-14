import { SmallCenterPlate } from "../../hoc/plates/centerPlate";

const Cezar = () => {
    return (
        <SmallCenterPlate>
            <div className="dftcontainer" style={{
                justifyContent: 'start', backgroundImage: 'url(/img/cezar.webp)',
                backgroundSize: '40%', backgroundRepeat: 'no-repeat', backgroundPosition: '106%'
            }}>
                <div style={{ margin: '10px 40px' }}>
                    <p style={{ fontSize: '30px' }}>СТАНЬ</p>
                    <p style={{ fontSize: '30px', margin: '-5px 20px' }}>ОДНИМ ИЗ НАС</p>
                </div>
            </div>
        </SmallCenterPlate >
    );
}

export default Cezar;