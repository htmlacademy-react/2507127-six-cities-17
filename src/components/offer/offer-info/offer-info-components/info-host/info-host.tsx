import HostDescription from './info-host-components/host-description/host-description';
import HostUser from './info-host-components/host-user/host-user';

function InfoHost():JSX.Element{
  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <HostUser/>
      <HostDescription/>
    </div>
  );
}

export default InfoHost;
