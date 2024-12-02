import { GridPoint } from '../../meny-time use/gridPoint';

export const Tournament_11 = ({ meetings }: { meetings: any[] }) => {
    return (
        <>
            <div className="gridtournamnet" style={{ transform: 'translate(0, 0)', gap: '50px' }}>

                <section>
                    <div className="hightgrid">
                        <div>
                            <div className="line" style={{ width: '260px' }}>
                                <div className="linevertical" style={{ height: '122px' }}></div>
                            </div>
                            <GridPoint item={meetings[0]} />
                        </div>
                        <div>
                            <div className="line" style={{ width: '1200px' }}></div>
                            <GridPoint item={meetings[1]} />
                        </div>
                        <div>
                            <div className="line" style={{ width: '760px' }}>
                                <div className="linevertical reverce" style={{ height: '122px' }}></div>
                            </div>
                            <GridPoint item={meetings[2]} />
                        </div>
                    </div>

                    <div className="lowgrid">
                        <div>
                            <div className="line" style={{ width: '1000px' }}></div>
                            <GridPoint item={meetings[3]} />
                        </div>
                        <div>
                            <div className="line" style={{ width: '200px' }}></div>
                            <GridPoint item={meetings[4]} />
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
                        <div className='invisible'>
                            <GridPoint item={{}} />
                        </div>
                    </div>

                    <div className="lowgrid">
                        <div>
                            <div className="lineprev"></div>
                            <GridPoint item={meetings[5]} />
                        </div>
                        <div>
                            <div className="lineprev"></div>
                            <div className="line" style={{ width: '170px' }}>
                                <div className="linevertical reverce" style={{ height: '122px' }}></div>
                            </div>
                            <GridPoint item={meetings[6]} />
                        </div>
                        <div>
                            <div className="lineprev"></div>
                            <div className="line" style={{ width: '370px' }}>
                                <div className="linevertical reverce" style={{ height: '242px' }}></div>
                            </div>
                            <GridPoint item={meetings[7]} />
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
                        <div className='invisible'>
                            <GridPoint item={{}} />
                        </div>
                        <div>
                            <GridPoint item={meetings[8]} />
                        </div>
                    </div>
                </section>


                <section>
                    <div className="hightgrid">
                        <div className='invisible'>
                            <GridPoint item={{}} />
                        </div>
                        <div>
                            <GridPoint item={meetings[9]} />
                        </div>
                    </div>

                    <div className="lowgrid">
                        <div className='invisible'>
                            <GridPoint item={{}} />
                        </div>
                        <div>
                            <GridPoint item={meetings[10]} />
                        </div>
                    </div>
                </section>


                <section>
                    <div className="hightgrid">
                        <div className='invisible'>
                            <GridPoint item={{}} />
                        </div>
                        <div>
                            <GridPoint item={meetings[11]} />
                        </div>
                    </div>

                    <div className="lowgrid">
                        <div className='invisible'>
                            <GridPoint item={{}} />
                        </div>
                        <div>
                            <div className="lineprev"></div>
                            <GridPoint item={meetings[12]} />
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
                        <div className='invisible'>
                            <GridPoint item={{}} />
                        </div>
                        <div>
                            <div className="line" style={{ width: '170px' }}>
                                <div className="linevertical reverce" style={{ height: '252px' }}></div>
                            </div>
                            <div className="lineprev"></div>
                            <GridPoint item={meetings[13]} />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="hightgrid">
                        <div className='invisible'>
                            <GridPoint item={{}} />
                        </div>
                        <div>
                            <GridPoint item={meetings[14]} />
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