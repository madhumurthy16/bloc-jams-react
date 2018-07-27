import React from 'react';

// This is a functional component

const Landing = () => (
	<section className="landing">

		<div className="card bg-dark text-white mb-5 border-0 rounded-0">
			<img className="card-img rounded-0" src='/assets/images/ocean1.jpeg' alt="Card image"/>
			<div className="card-img-overlay m-5">
				<h1 className="card-title display-4">Turn the music up!</h1>
				<p className="card-text lead">Anywhere Anytime</p>
			</div>
		</div>

		<section className="selling-points container mb-5">
			<div className="card-deck">
				<div className="card">
					<div className="card-body">
						<h3 className="point-title card-title mb-4">Choose your music</h3>
						<p className="point-description card-text">The world is full of music; why should you have to listen to music that someone else chose?</p>
					</div>
				</div>
				<div className="card">
					<div className="card-body">
        				<h3 className="point-title card-title mb-4">Unlimited, streaming, ad-free</h3>
        				<p className="point-description card-text">No arbitrary limits. No distractions.</p>
        			</div>
        		</div>
      			<div className="card">
					<div className="card-body">
       			 		<h3 className="point-title card-title mb-4">Mobile enabled</h3>
        				<p className="point-description card-text">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
        			</div>
        		</div>
	      	</div>	
		</section>
	</section>
);

export default Landing;


