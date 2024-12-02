import HostDescription from './components/description/description';
import HostUser from './components/user/user';

function Host():JSX.Element{
  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <HostUser/>
      <HostDescription/>
    </div>
  );
}

export default Host;
