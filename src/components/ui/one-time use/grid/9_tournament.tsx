import { GridPoint } from '../../meny-time use/gridPoint';

export const Tournament_9 = ({ }) => {
    return (
        <>
            <div className="gridtournamnet" style={{ transform: 'translate(-20px, 0)' }}>

                <section>
                    <div className="hightgrid">
                        <div>
                            <div className="line" style={{ width: '500px' }}></div>
                            <GridPoint />
                        </div>
                        <div>
                            <div className="line" style={{ width: '200px' }}>
                                <div className="linevertical reverce" style={{ height: '122px' }}></div>
                            </div>
                            <GridPoint />
                        </div>
                    </div>

                    <div className="lowgrid">
                        <div>
                            <div className="line" style={{ width: '900px' }}></div>
                            <GridPoint />
                        </div>
                        <div>
                            <div className="line" style={{ width: '300px' }}></div>
                            <GridPoint />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="hightgrid">
                        <div className='invisible'>
                            <GridPoint />
                        </div>
                        <div className='invisible'>
                            <GridPoint />
                        </div>
                    </div>

                    <div className="lowgrid">
                        <div>
                            <div className="lineprev"></div>
                            <GridPoint />
                        </div>
                        <div>
                            <div className="line" style={{ width: '200px' }}>
                                <div className="linevertical reverce" style={{ height: '122px' }}></div>
                            </div>
                            <div className="lineprev"></div>
                            <GridPoint />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="hightgrid">
                        <div>
                            <div className="line" style={{ width: '660px' }}>
                                <div className="linevertical" style={{ height: '122px' }}></div>
                            </div>
                            <GridPoint />
                        </div>
                        <div className='invisible'>
                            <GridPoint />
                        </div>
                    </div>

                    <div className="lowgrid">
                        <div>
                            <GridPoint />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="hightgrid">
                        <div className='invisible'>
                            <GridPoint />
                        </div>
                        <div className='invisible'>
                            <GridPoint />
                        </div>
                    </div>

                    <div className="lowgrid">
                        <div className='invisible'>
                            <GridPoint />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="hightgrid">
                        <div className='invisible'>
                            <GridPoint />
                        </div>
                        <div className='invisible'>
                            <GridPoint />
                        </div>
                    </div>

                    <div className="lowgrid">
                        <div>
                            <div className="lineprev"></div>
                            <div className="line" style={{ width: '240px' }}>
                                <div className="linevertical reverce" style={{ height: '132px' }}></div>
                            </div>
                            <GridPoint />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="hightgrid">
                        <div className='invisible'>
                            <GridPoint />
                        </div>
                        <div>
                            <GridPoint />
                        </div>
                    </div>

                    <div className="lowgrid">
                        <div className='invisible'>
                            <GridPoint />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}