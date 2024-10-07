import { GridPoint } from '../../meny-time use/gridPoint';

export const Tournament_6 = ({ }) => {
    return (
        <>
            <div className="gridtournamnet" style={{ transform: 'translate(-120px, 0)' }}>

                <section>
                    <div className="hightgrid">
                        <div>
                            <div className="line" style={{ width: '500px' }}></div>
                            <GridPoint />
                        </div>
                        <div>
                            <div className="line" style={{ width: '360px' }}>
                                <div className="linevertical reverce" style={{ height: '122px' }}></div>
                            </div>
                            <GridPoint />
                        </div>
                    </div>

                    <div className="lowgrid">
                        <div>
                            <div className="line" style={{ width: '700px' }}></div>
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
                    </div>
                </section>

                <section>
                    <div className="hightgrid">
                        <div>
                            <div className="line" style={{ width: '480px' }}>
                                <div className="linevertical" style={{ height: '132px' }}></div>
                            </div>
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
                            <div className="line" style={{ width: '280px' }}>
                                <div className="linevertical reverce" style={{ height: '132px' }}></div>
                            </div>
                            <div className="lineprev"></div>
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