import React from 'react'
import HogCard from './HogCard';

const Hogs = ({hogs}) => {
    return (
		<div className="ui six stackable cards">
			{hogs.map(hog => (
				<HogCard
					key={hog.name}
					hog={hog}
				/>
			))}
		</div>
  );
}

export default Hogs;

