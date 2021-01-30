import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    about: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    aboutPanel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282c348a',
        border: '2px solid darkslategray',
        borderRadius: '8px',
        margin: 8,
        padding: 4,
        width: '70%',
        overflow: 'scrollY'
    },
    aboutPanelHeader: {
        scale: 1.3
    },
    aboutPanelSection: {
        margin: '1rem',

    }
})

const About = () => {
    const styles = useStyles();
    return (
        <div className={styles.about}>
            <div className={styles.aboutPanel}>
                <div className={styles.aboutPanelHeader}>
                    Jeff "Tank" Harkleroad
                </div>
                <div className={styles.aboutPanelSection}>
                    <div>
                        Serving Columbus and central Ohio, we make smoked and 
                        slow-cooked meats and comfort cuisine.
                    </div>
                </div>
            </div>
            <div className={styles.aboutPanel}>
                <div className={styles.aboutPanelHeader}>
                    Where you can find us: 
                </div>
                <div className={styles.aboutPanelSection}>
                    <div>
                        <a href='https://www.facebook.com/HeyHeyBarandGrill/'> The Hey Hey</a>
                    </div>
                    <div>
                        Every Sunday, 2PM - 10PM 
                    </div>
                    <div>
                        361 E Whittier St, Columbus, OH 43206
                    </div>
                </div>
                <hr style={{width: '70%'}} />
                <div className={styles.aboutPanelSection}>
                    <div>
                        <a href='https://www.facebook.com/pages/category/Bar/Brewstirs-Beechwold-Tavern-112882397218391/' >Brewstirs of Beechwold</a>
                    </div>
                    <div>
                        Every day, Noon - 10PM
                    </div>
                    <div>
                    4955 Arbor Village Drive, Columbus, Ohio 43215
                    </div>
                </div>
                <hr style={{width: '70%'}} />
                <div className={styles.aboutPanelSection}>
                    <div>
                        <a href='https://www.facebook.com/TheZigHaus/' >Leipzig Haus</a>
                    </div>
                    <div>
                        Thursday - Saturday, Noon - 10PM
                    </div>
                    <div>
                        2201 East Livingston Ave, Columbus, Ohio 43209
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;