import React from 'react';
import { DigitalClock } from './components';

function App() {
    return (
        <>
            <div className={'left'}>
                <DigitalClock />
                <DigitalClock
                    bgColor={'#e4e4e4'}
                    fgColor={'#138c1b'}
                    hoverColor={'rgba(91,198,102,0.31)'}
                    size={300}
                    format={'24h'}
                    timezone={'Asia/Tokyo'}
                />
                <DigitalClock
                    bgColor={'#f4f4f4'}
                    fgColor={'#248cff'}
                    hoverColor={'rgba(186,231,255,0.55)'}
                    size={500}
                    format={'24h'}
                    timezone={'UTC'}
                />
                <DigitalClock
                    bgColor={'#f4f4f4'}
                    fgColor={'rgba(255,36,36,0.91)'}
                    hoverColor={'rgba(255,36,36,0.34)'}
                    size={650}
                    format={'24h'}
                    timezone={'Europe/London'}
                />
            </div>

            <div className={'right'}>
                <DigitalClock size={300} />
                <DigitalClock
                    bgColor={'#424242'}
                    fgColor={'#fff'}
                    hoverColor={'rgba(66,66,66,0.66)'}
                    size={300}
                    format={'12h'}
                />
                <DigitalClock
                    bgColor={'#248cff'}
                    fgColor={'#f4f4f4'}
                    hoverColor={'rgba(0,140,220,0.79)'}
                    size={500}
                    format={'24h'}
                    timezone={'Europe/Paris'}
                />
                <DigitalClock
                    bgColor={'#424242'}
                    fgColor={'#fff'}
                    hoverColor={'rgba(66,66,66,0.66)'}
                    size={650}
                    format={'12h'}
                    timezone={'America/New_York'}
                />
            </div>
        </>
    );
}

export default App;
