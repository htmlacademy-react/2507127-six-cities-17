import cn from 'classnames';
import { HostType } from '../../../../types/offers';

type HostProps = {
  host: HostType;
}

function Host({host}: HostProps):JSX.Element{
  const {avatarUrl, isPro, name} = host;

  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div className={cn(
          'offer__avatar-wrapper',
          {'offer__avatar-wrapper--pro': isPro},
          'user__avatar-wrapper'
        )}
        >
          <img
            className="offer__avatar user__avatar"
            src={avatarUrl}
            width={74}
            height={74}
            alt="Host avatar"
          />
        </div>
        <span className="offer__user-name">{name}</span>
        {isPro && <span className="offer__user-status">Pro</span>}
      </div>
    </div>
  );
}

export default Host;
