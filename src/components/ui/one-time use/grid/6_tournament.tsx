import { GridPoint } from '../../meny-time use/gridPoint';

export const Tournament_6 = ({ meetings }: { meetings: any[] }) => {
    return (
        <>
            <div className="gridtournamnet" style={{ transform: 'translate(-120px, 0)' }}>

                <section>
                    <div className="hightgrid">
                        <div>
                            <div className="line" style={{ width: '500px' }}></div>
                            <GridPoint item={meetings[0]} />
                        </div>
                        <div>
                            <div className="line" style={{ width: '360px' }}>
                                <div className="linevertical reverce" style={{ height: '122px' }}></div>
                            </div>
                            <GridPoint item={meetings[1]} />
                        </div>
                    </div>

                    <div className="lowgrid">
                        <div>
                            <div className="line" style={{ width: '700px' }}></div>
                            <GridPoint item={meetings[2]} />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="hightgrid">
                        <div className='invisible'>
                            <GridPoint item={{}} />
                        </div>
                        <div className='invisible'>
                            <GridPoint item={{}} />
                        </div>
                    </div>

                    <div className="lowgrid">
                        <div>
                            <div className="lineprev"></div>
                            <GridPoint item={meetings[3]} />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="hightgrid">
                        <div>
                            <div className="line" style={{ width: '480px' }}>
                                <div className="linevertical" style={{ height: '132px' }}></div>
                            </div>
                            <GridPoint item={meetings[4]} />
                        </div>
                        <div className='invisible'>
                            <GridPoint item={{}} />
                        </div>
                    </div>

                    <div className="lowgrid">
                        <div>
                            <div className="lineprev"></div>
                            <GridPoint item={meetings[5]} />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="hightgrid">
                        <div className='invisible'>
                            <GridPoint item={{}} />
                        </div>
                        <div className='invisible'>
                            <GridPoint item={{}} />
                        </div>
                    </div>

                    <div className="lowgrid">
                        <div>
                            <div className="line" style={{ width: '280px' }}>
                                <div className="linevertical reverce" style={{ height: '132px' }}></div>
                            </div>
                            <div className="lineprev"></div>
                            <GridPoint item={meetings[6]} />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="hightgrid">
                        <div className='invisible'>
                            <GridPoint item={{}} />
                        </div>
                        <div>
                            <GridPoint item={meetings[7]} />
                        </div>
                    </div>

                    <div className="lowgrid">
                        <div className='invisible'>
                            <GridPoint item={{}} />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}