import React,{Component} from 'react';
import Card from './CardUI';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import img5 from '../../images/img5.jpg';
import img6 from '../../images/img6.jpg';
import img7 from '../../images/img7.jpg';
import img8 from '../../images/img8.jpg';
import img9 from '../../images/img9.jpg';

class Cards extends Component
{
    render(){
        return(
            <div className="temp">
<div className="conatiner-fluid d-flex justify-content-center">
    <div className="col">
    <div className="row">
        <div className="col-md-4 gap">
            <Card  imgsrc={img1} title="SMASHES" text="Ravindra Jadeja Introduces Fans To His ' 22 twenty Acres Entertainer', Michael Vaughan Reacts.See Pics" link="https://sports.ndtv.com/cricket/ravindra-jadeja-introduces-fans-his-22-acres-entertainer-michael-vaughan-reacts-2442474" />
        </div>
        <div className="col-md-4 gap">
            <Card imgsrc={img2} title="STATEMENT BY JADDU" text="Should Try With The Bat: Ravindra Jadeja On MS Dhoni's Sword Wielding Gesture. Watch" link="https://sports.ndtv.com/cricket/ms-dhoni-does-ravindra-jadejas-trademark-sword-wielding-gesture-csk-all-rounder-reacts-watch-2442951"/>
        </div>
        <div className="col-md-4 gap">
            <Card imgsrc={img3} title="HITS BACK" text="Lot Of People To Blame: Former Australia Bowling Coach David Sekar On Sandpaper Gate" link="https://sports.ndtv.com/cricket/lot-of-people-to-blame-former-australia-bowling-coach-david-sekar-on-sandpaper-gate-2442896"/>
        </div>
    </div>
    <div className="row">
        <div className="col-md-4 gap">
            <Card  imgsrc={img4} title="BEST IN WORLD" text="Virat Kohli Best Batsman In The World, Will Always Remember Him, Says Tim Paine" link="https://sports.ndtv.com/cricket/virat-kohli-best-batsman-in-the-world-will-always-remember-him-says-tim-paine-2442848"/>
        </div>
        <div className="col-md-4 gap">
            <Card imgsrc={img5} title="WOMENS'S CRICKET" text="Indian Women's Cricket Team Likely To Tour Australia In September, Hints Megan Schutt" link="https://sports.ndtv.com/cricket/indian-womens-cricket-team-likely-to-tour-australia-in-september-hints-megan-schutt-2442835"/>
        </div>
        <div className="col-md-4">
            <Card imgsrc={img6} title="PLEASE BE SCARED" text=" Please be scared: Ravichandran Ashwin Asks Everyone To :Be On War Footing Defence vs Covid" link="https://sports.ndtv.com/cricket/ravichandran-ashwin-asks-everyone-to-be-on-war-footing-defence-against-covid-says-please-be-scared-2442781"/>
        </div>
    </div>
    <div className="row">
        <div className="col-md-4 gap">
            <Card  imgsrc={img7} title="RAJENDRASINH JADEJA" text="Former Saurashtra Cricketer And BCCI Referee Rajendrasinh Jadeja Dies Of COVID-19" link="https://sports.ndtv.com/cricket/rajendrasinh-jadeja-former-saurashtra-cricketer-and-bcci-referee-dies-2442661"/>
        </div>
        <div className="col-md-4 gap">
            <Card imgsrc={img8} title="RECOVERING FASTLY" text="I Wake Up Each Day Stronger: T Natarajan Recovering From Knee Surgery" link="https://sports.ndtv.com/cricket/t-natarajan-recovering-from-knee-surgery-says-i-wake-up-each-day-stronger-2442702"/>
        </div>
        <div className="col-md-4 gap">
            <Card imgsrc={img9} title="HARDIK'S BOY" text="Watch:Baby Pandya On The Move, Mom Natasa Stankovic And Dad Hardik Pandya Can't Stop Smiling" link="https://sports.ndtv.com/cricket/watch-baby-pandya-on-the-move-mom-natasa-stankovic-and-dad-hardik-pandya-cant-stop-smiling-2442752"/>
        </div>
    </div>
</div>
</div>
</div>
        );
    }
}
export default Cards;