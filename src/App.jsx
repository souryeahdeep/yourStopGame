import Player from './components/Player.jsx';
import TimesChalleger from './components/TimesChallenger.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
       <TimesChalleger key={1} title="Easy" targetTime={1}/>
       <TimesChalleger key={2} title="Not Easy" targetTime={5}/>
       <TimesChalleger key={3} title="Getting tough" targetTime={10}/>
       <TimesChalleger key={4} title="Pros only" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
