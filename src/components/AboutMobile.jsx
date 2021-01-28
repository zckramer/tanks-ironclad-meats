import { createUseStyles } from 'react-jss';
import MediaQuery from 'react-responsive';

const useStylesPortrait = createUseStyles({
    about: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingTop: 55
    },
    aboutPanel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282c348a',
        border: '2px solid darkslategray',
        borderRadius: '8px',
        margin: 4,
        padding: 2,
        width: '90%',
        overflow: 'scrollY'
    },
    aboutPanelHeader: {
        scale: 1.3
    },
    aboutPanelSection: {
        margin: '1rem'
    }
})

const useStylesLandscape = createUseStyles({
    about: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingTop: 60
    },
    aboutPanel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282c348a',
        border: '2px solid darkslategray',
        borderRadius: '8px',
        margin: 4,
        padding: 2,
        width: '90%',
        overflow: 'scrollY'
    },
    aboutPanelHeader: {
        scale: 1.3
    },
    aboutPanelSection: {
        margin: 2
    }
})

const About = () => {
    const stylesPortrait = useStylesPortrait();
    const stylesLandscape = useStylesLandscape();

    return (
        <div>
            <MediaQuery query='(orientation: portrait)'>
                <div className={stylesPortrait.about}>
                    <div className={stylesPortrait.aboutPanel}>
                        <div className={stylesPortrait.aboutPanelHeader}>
                            Jeff "Tank" Harkleroad
                        </div>
                        <div className={stylesPortrait.aboutPanelSection}>
                            <div>
                                Serving Columbus and central Ohio, we make smoked and 
                                slow-cooked meats and comfort cuisine.
                            </div>
                        </div>
                    </div>
                    <div className={stylesPortrait.aboutPanel}>
                        <div className={stylesPortrait.aboutPanelHeader}>
                            Where you can find us: 
                        </div>
                        <div className={stylesPortrait.aboutPanelSection}>
                            <div>The Hey Hey</div>
                            <div>
                                Every Sunday, 2PM - 10PM 
                            </div>
                            <div>
                                361 E Whittier St, Columbus, OH 43206
                            </div>
                        </div>
                        <hr style={{width: '70%'}} />
                        <div className={stylesPortrait.aboutPanelSection}>
                            <div>Brewstirs of Beechwold</div>
                            <div>
                                Every day, Noon - 10PM
                            </div>
                            <div>
                            4955 Arbor Village Drive, Columbus, Ohio 43215
                            </div>
                        </div>
                        <hr style={{width: '70%'}} />
                        <div className={stylesPortrait.aboutPanelSection}>
                            <div>Leipzig Haus</div>
                            <div>
                                Thursday - Saturday, Noon - 10PM
                            </div>
                            <div>
                                2201 East Livingston Ave, Columbus, Ohio 43209
                            </div>
                        </div>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery query='(orientation: landscape)'>
            <div className={stylesLandscape.about}>
                    <div className={stylesLandscape.aboutPanel}>
                        <div className={stylesLandscape.aboutPanelHeader}>
                            Jeff "Tank" Harkleroad
                        </div>
                        <div className={stylesLandscape.aboutPanelSection}>
                            <div>
                                Serving Columbus and central Ohio, we make smoked and 
                                slow-cooked meats and comfort cuisine.
                            </div>
                        </div>
                    </div>
                    <div className={stylesLandscape.aboutPanel}>
                        <div className={stylesLandscape.aboutPanelHeader}>
                            Where you can find us: 
                        </div>
                        <div className={stylesLandscape.aboutPanelSection}>
                            <div>The Hey Hey</div>
                            <div>
                                Every Sunday, 2PM - 10PM 
                            </div>
                            <div>
                                361 E Whittier St, Columbus, OH 43206
                            </div>
                        </div>
                        <hr style={{width: '70%'}} />
                        <div className={stylesLandscape.aboutPanelSection}>
                            <div>Brewstirs of Beechwold</div>
                            <div>
                                Every day, Noon - 10PM
                            </div>
                            <div>
                            4955 Arbor Village Drive, Columbus, Ohio 43215
                            </div>
                        </div>
                        <hr style={{width: '70%'}} />
                        <div className={stylesLandscape.aboutPanelSection}>
                            <div>Leipzig Haus</div>
                            <div>
                                Thursday - Saturday, Noon - 10PM
                            </div>
                            <div>
                                2201 East Livingston Ave, Columbus, Ohio 43209
                            </div>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </div>
    )
}
export default About;